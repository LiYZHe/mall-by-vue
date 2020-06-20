import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[
      {
        picUrl:"https://s10.mogucdn.com/mlcdn/c45406/200309_39fl50k505ij280hlajj3d73g2fld_224x224.png",
        title:'上衣'
      },{
        picUrl:'https://s10.mogucdn.com/mlcdn/c45406/200309_3k62ck469f3j35afjd7j746ge9d31_224x224.png',
        title:'裙子'
      },{
        picUrl:'https://s10.mogucdn.com/mlcdn/c45406/200309_1g7836gh88clid875e2fdl86l91jg_224x224.png',
        title:'裤子'
      },{
        picUrl:'https://s10.mogucdn.com/mlcdn/c45406/200309_67j08ai5cj5fgilbfa3g4kikf1f2j_224x224.png',
        title:'套装'
      },{
        picUrl:'https://s10.mogucdn.com/mlcdn/c45406/200309_4lka19gk484c6eh15f4lebc31326b_224x224.png',
        title:'女鞋'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
