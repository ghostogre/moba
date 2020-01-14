<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>内容管理</template>
          <el-menu-item-group v-for="(item, index) in menuList" :key="index">
            <template slot="title">{{item.name}}</template>
            <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        menuList: [
          {
            name: '分类',
            children: [
              {
                name: '新建分类',
                path: '/categories/create'
              },
              {
                name: '分类列表',
                path: '/categories/list'
              }
            ]
          },
          {
            name: '物品',
            children: [
              {
                name: '新建物品',
                path: '/items/create'
              },
              {
                name: '物品列表',
                path: '/items/list'
              }
            ]
          },
          {
            name: '英雄',
            children: [
              {
                name: '新建英雄',
                path: '/heroes/create'
              },
              {
                name: '英雄列表',
                path: '/heroes/list'
              }
            ]
          },
          {
            name: '文章',
            children: [
              {
                name: '新建文章',
                path: '/articles/create'
              },
              {
                name: '文章列表',
                path: '/articles/list'
              }
            ]
          }
        ]
      }
    }
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

