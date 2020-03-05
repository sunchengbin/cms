<template>
  <div class="dashboard-container">
    <el-row :gutter="12">
      <el-col :span="8" v-for="(item, index) in links" :key="index">
        <el-card shadow="always">
          <a :href="item.link" target="_blank">
            {{item.text}}
          </a>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      links: [
        {
          text: '增值数据统计后台',
          link: 'https://lscms.ktvsky.com/login'
        },
        {
          text: '粉丝管理后台',
          link: 'https://lscms.ktvsky.com/gzh/home'
        },
        {
          text: '关闭TV二维码管理后台',
          link: 'https://lscms.ktvsky.com/op/home'
        },
        {
          text: '雷石退款后台',
          link: 'https://cms.ktvsky.com/login'
        },
        {
          text: '手机券吧公众号管理平台',
          link: 'http://s.ktvsky.com/wx/account/coupon/login'
        },
        {
          text: '雷盟管理平台',
          link: 'http://lcms.ktvsky.com/'
        },
        {
          text: '雷石公众号推送管理平台',
          link: 'https://lscms.ktvsky.com/conf/home'
        },
        {
          text: '设计团队蓝湖地址',
          link: 'https://lanhuapp.com/web/#/item?fid=all&commonly=all'
        },
        {
          text: '绩效管理平台',
          link: 'http://oa.thunder.com.cn/Login.aspx'
        }
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-container {
    padding: 40px;
    .el-col {
      margin-bottom: 8px;
    }
    .el-card__body a {
      text-decoration: none;
      font-size: 14px;
      color: $linkColor;
    }
  }
</style>
