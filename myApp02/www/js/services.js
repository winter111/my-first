angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory("HomeGoodlistRow",function(){
  var homeGoodlistRows = [
    [{ "id":0,"main":"【B.G.M】游戏必备战歌","imgsrc":"18981968742048783.jpg"},
      {"id":1,"main":"古风女声对唱.因风飞过蔷薇","imgsrc":"18923694625686839.jpg"},
    {'id':2,'main':'鲁蛇时代 | 台湾乐团的无奈与反抗','imgsrc':'19115009648997987.jpg'}],
    [{ "id":3, "main":'好听到爆的歌（第一弹）','imgsrc':'18967675090876693.jpg'
    },
      { "id":4, "main":'【毕业季】青春不说再见','imgsrc':'19217264230385030.jpg',
      },{
      	'id':5,'main':'当原版遭遇鬼畜翻唱版,才是你的真爱','imgsrc':'109951162901620908.jpg'
      }]
  ]
   return{
    all:function(){
      return homeGoodlistRows;
    }
  };
})
.factory("homemusic",function(){
  var homemusics = [
    [{ "id":0,'title':'新歌推荐',"main":'推荐合口味的新歌',"imgsrc":"18981968742048783.jpg"},
      {"id":1,'title':'凉凉',"main":"张碧晨/杨宗伟","imgsrc":"18923694625686839.jpg"},
    {'id':2,'title':'下一个季节','main':'步步惊心主题曲','imgsrc':'19115009648997987.jpg'}],
    [{ "id":3,'title':'要命的烦恼',"main":'mic男团','imgsrc':'18967675090876693.jpg'
    },
      { "id":4,'title':'一生何求','main':'大话西游片尾曲','imgsrc':'19217264230385030.jpg',
      },{
      	'id':5,'title':'This Old Dog','main':'Mac Demearco',
      	'imgsrc':'109951162901620908.jpg'
      }]
  ]
   return{
    all:function(){
      return homemusics;
    }
  };
})
.factory("homemv",function(){
  var homemvs = [
    [{ "id":0,'title':'动物世界',"main":'薛之谦',"imgsrc":"18981968742048783.jpg"},
      {"id":1,'title':'Bon Appetit',"main":"katy Perry","imgsrc":"18923694625686839.jpg"
      }],
    [{ "id":3,'title':'FANASTIC BABY',"main":'Bigbang','imgsrc':'18967675090876693.jpg'
    },
      { "id":4,'title':'随我','main':'华晨宇','imgsrc':'19217264230385030.jpg',
      }]
  ]
   return{
    all:function(){
      return homemvs;
    }
  };
})
.factory("homerudio",function(){
  var homerudios = [
    [{ "id":0,"main":'吃生蚝为什么会有海洋的味道',"imgsrc":"18605935767113834.jpg"},
      {"id":1,"main":"黑道学生038","imgsrc":"18605935767113834.jpg"},
    {'id':2,'main':'还不是因为你长的不好看','imgsrc':'18605935767113834.jpg'}],
    [{ "id":3, "main":'龙应台：为谁','imgsrc':'18605935767113834.jpg'
    },
      { "id":4, "main":'陆垚知马俐 - 翻唱','imgsrc':'18605935767113834.jpg'
      },{
      	'id':5,'main':'我有一个特别棒的妈妈','imgsrc':'18605935767113834.jpg'
      }]
  ]
   return{
    all:function(){
      return homerudios;
    }
  };
})