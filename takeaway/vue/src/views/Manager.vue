<template>
  <div class="manager-container">
    <!--  头部  -->
    <div class="manager-header">
      <div class="manager-header-left">
        <img src="@/assets/imgs/logo.png" />
        <div class="title">考拉外卖</div>
      </div>

      <div class="manager-header-center">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: $route.path }">{{ $route.meta.name }}</el-breadcrumb-item>
        </el-breadcrumb>

        <span style="color: orangered; font-size: 20px; margin-left: 50px; cursor: pointer" @click="fromVisible = true">注意：本项目完整笔记 + 从0带做视频在知识星球《项目训练营》提供，戳我进入星球</span>
      </div>

      <div class="manager-header-right">
        <el-dropdown placement="bottom">
          <div class="avatar">
            <img :src="user.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
            <div>{{ user.name ||  '管理员' }}</div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="goToPerson">个人信息</el-dropdown-item>
            <el-dropdown-item @click.native="$router.push('/password')">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <!--  主体  -->
    <div class="manager-main">
      <!--  侧边栏  -->
      <div class="manager-main-left">
        <el-menu :default-openeds="['info', 'user']" router style="border: none" :default-active="$route.path">
          <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-submenu index="info">
            <template slot="title">
              <i class="el-icon-menu"></i><span>信息管理</span>
            </template>
            <el-menu-item index="/category">商品分类信息</el-menu-item>
            <el-menu-item index="/goods">商品信息</el-menu-item>
            <el-menu-item index="/banner" v-if="user.role === 'ADMIN'">广告信息</el-menu-item>
            <el-menu-item index="/orders">订单信息</el-menu-item>
            <el-menu-item index="/collect" v-if="user.role === 'ADMIN'">收藏信息</el-menu-item>
            <el-menu-item index="/comment">评论信息</el-menu-item>
            <el-menu-item index="/notice" v-if="user.role === 'ADMIN'">公告信息</el-menu-item>
          </el-submenu>

          <el-submenu index="user" v-if="user.role === 'ADMIN'">
            <template slot="title">
              <i class="el-icon-menu"></i><span>用户管理</span>
            </template>
            <el-menu-item index="/admin">管理员信息</el-menu-item>
            <el-menu-item index="/business">商家信息</el-menu-item>
            <el-menu-item index="/user">用户信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <!--  数据表格  -->
      <div class="manager-main-right">
        <router-view @update:user="updateUser" />
      </div>
    </div>

    <el-dialog title="重要说明"  :visible.sync="fromVisible" width="40%" :close-on-click-modal="false" destroy-on-close>
      <div>
        <div style="font-size: 16px; font-weight: bold; color: red; text-align: center">
          本原创项目提供：项目脚手架 + 详细带撸笔记 + 手把手从零带敲视频
        </div>
        <div style="font-size: 15px; font-weight: bold; margin-top: 20px; text-align: center">
          微信扫描下方二维码，加入知识星球，即可获取资料，跟着UP主带撸。
        </div>
        <div style="font-size: 15px; font-weight: bold; color: red; margin: 20px 0; text-align: center">
          星球内部提供一对一答疑。
        </div>
        <div style="text-align: center">
          <img src="@/assets/imgs/知识星球.png" alt="" style="width: 300px">
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="fromVisible = false">关 闭</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "Manager",
  data() {
    return {
      user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
      fromVisible: false
    }
  },
  created() {
    if (!this.user.id) {
      this.$router.push('/login')
    }
  },
  methods: {
    updateUser() {
      this.user = JSON.parse(localStorage.getItem('xm-user') || '{}')   // 重新获取下用户的最新信息
    },
    goToPerson() {
      if (this.user.role === 'ADMIN') {
        this.$router.push('/adminPerson')
      } else if (this.user.role === 'BUSINESS') {
        this.$router.push('/businessPerson')
      }
    },
    logout() {
      localStorage.removeItem('xm-user')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/manager.css";
</style>