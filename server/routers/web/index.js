const router = require('express').Router()

module.exports = app => {
  const mongoose = require('mongoose')
  const Article = mongoose.model('Article')
  const Category = mongoose.model('Category')
  // 制造假数据
  // router.get('/news/list', async (req, res) => {
  //   const parent = await Category.findOne().where({
  //     name: '新闻分类'
  //   }) // 只找新闻分类下的
  //   const cats = await Category.find().where({
  //     parent
  //   }).lean() // lean表示获取纯JS对象
  //   const newsTitles = ["新春王者翼起嗨 千店齐发线下开黑", "峡谷英雄辞旧岁，快手集结迎新年", "觉醒之战——斗鱼主播带你嗨翻天", "年兽入侵丨那个神秘生物来了！搅乱峡谷的竟是它？！", "屈臣氏联合王者荣耀，打造新年游戏购物新体验", "嬴政小头像不显示问题说明", "李白-凤求凰个人主页展示异常问题说明", "1月16日全服不停机更新公告", "微信区组队消费活动链接异常说明", "觉醒之战版本更新后开启", "凤求凰&amp;凤凰于飞限时返场 皮肤优化即将来袭", "王者新春年货节，组队消费活动赢好礼！", "【觉醒英雄，赢精彩豪礼】活动开启公告", "娜可露露首套史诗皮肤-晚萤即将上架 更多礼遇等你解锁！", "探秘玄雍活动 参与拿专属好礼", "2020年KPL春季转会期俱乐部挂牌名单公布", "历时72小时打造东北版《王者荣耀》，雪雕王者经典形象", "王者少年的英雄梦！高校打造文字矩阵空间通道装置", "强强联合！LGD携手大鹅文化，斥资8000万进军KPL", "一笔绘峡谷，一梦登王者！ 山东工艺美术学院“王者360度全景画”来了！"] 
  //   const newsList = newsTitles.map(title => {
  //     const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5) // 打乱数组
  //     return {
  //       title,
  //       categories: randomCats.slice(0, 2) // 随机取两个
  //     }
  //   })
  //   await Article.deleteMany({}) // 任意条件删除
  //   await Article.insertMany(newsList)
  //   res.send(newsList)
  // })

  router.get('/news/list', async (req, res) => {
    // const cats = await Category.findOne({
    //   name: '新闻分类'
    // }).populate({ // 关联表
    //   path: 'children',
    //   populate: {
    //     path: 'newsList'
    //   }
    // })
    // 这种方法有个问题

    const parent = await Category.findOne({
      name: '新闻分类'
    })
    // MongoDB的聚合管道将MongoDB文档在一个管道处理完毕后将结果传递给下一个管道处理。
    let cats = await Category.aggregate([
      { $match: { parent: parent._id } }, // $match：匹配
      {
        $lookup: {
          from: 'articles', // 等待被JOIN的集合，集合名默认是mongoose.model第一个参数的小写加复数的形式
          localField: '_id', // 源集合中的match值
          foreignField: 'categories', // 待Join的集合的match值
          as: 'newsList' // 为输出文档的新增值命名
        }
      },
      {
        $addFields: { // 添加字段
          newsList: {
            $slice: ['$newsList', 5] // 值为原文档对象中newsList
          }
        }
      }
    ])

    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      newsList: await Article.find().where({
        categories: { $in: subCats } // $in查询关键字，满足后面的数组内就可以查出来
      }).populate('categories').limit(5).lean()
    })

    cats.map(cat => {
      cat.newsList.map(news => {
        // 热门特殊处理
        news.categoryName = cat.name === '热门' ? news.categories[0].name : cat.name
        return news
      })
    })
    res.send(cats)
  })

  app.use('/web/api', router)
}