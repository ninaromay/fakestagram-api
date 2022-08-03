const bbdd = [
    { 
        user : {
            id: 0, 
            name : 'firstavenger',
            text: 'Chilling 75 years',
            content: 'New in fakestagram :^)',
            img: '/assets/profiles/cap.jfif', 
            url :'captain_america'
        },
        posts : [
            {id: 0, img: 'captainamerica_01.png', likes: 5, url :'captainamerica_01',
             description: 'Does this mean I am worthy?🤭😝', tags: ['captain_america', 'ironman', 'thor', 'wanda_vision', 'winter_soldier', 'falcon', 'black_widow', 'hawkeye' ],
             comments: [
                {id: 0, name: 'ilovethunder', text: 'I KNEW IT!!😱😰',                   img: '/assets/profiles/thor.jpeg',       reaction: false,  url :'thor',      reply: []},
                {id: 1, name: 'falcon',       text: 'He is worthy, accept it',            img: '/assets/profiles/falcon.jpg',      reaction: true,   url :'falcon',    reply: []},
                {id: 2, name: 'peter_who',    text: 'Never wound what you can\'t kill.',  img: '/assets/profiles/spiderman.jfif',  reaction: false,  url :'spiderman', reply: []}
             ]
            },
            {id: 1, img: 'captainamerica_02.jpg', likes: 8, url :'captainamerica_02',
             description: 'New look, not bad for 100s', tags: [],
             comments: [
                {id: 3, name:'lil_birdie',       text:'I think you left some bit to shave man', img:'/assets/profiles/falcon.jpg', reaction: true,   url :'falcon', reply: []},
                {id: 4, name:'ilovethunder', text:'You copied my beard huh',                img:'/assets/profiles/thor.jpeg',  reaction: false,  url :'thor',   reply: []}
             ]
            },
            {id: 2, img: 'captainamerica_03.jfif', likes: 23, url :'captainamerica_03',
             description: 'Hey guys, remember when we where fighting for our beliefs?', tags: [''],
             comments: [
                {id: 5, name:'lil_birdie',       text:'I think you left some bit to shave man', img:'/assets/profiles/falcon.jpg', reaction: true,   url :'falcon', reply: []},
                {id: 6, name:'ilovethunder', text:'You copied my beard huh',                img:'/assets/profiles/thor.jpeg',  reaction: false,  url :'thor',   reply: []},
                {id: 7, name:'wealthy_can',  text:'If we can\'t protect the Earth, you can be damned well sure we will avenge it!', img: '/assets/profiles/iron_man.jfif', reaction: true, url: 'ironman', reply: []}
             ]
           }
        ],
        followers : [
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
            {id: 12, name: 'agent_13',              text:'',                     img: '/assets/profiles/agent13.jfif',        follow : false, url: ''  }
        ],
        following : [
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
            {id: 11, name: 'love_b4_life',          text: 'Dead to the world',   img: '/assets/profiles/wandavision.jpg',     follow : true, url: 'wanda_vision' }
        ],
        videos : [
            {id: 0,  video: '/assets/videos/01.gif',  plays : 23, likes: 10,  comments: 3},
            {id: 1,  video: '/assets/videos/02.gif',  plays : 28, likes: 11,  comments: 5},
            {id: 2,  video: '/assets/videos/03.gif',  plays : 15, likes: 9,   comments: 4},
            {id: 3,  video: '/assets/videos/04.gif',  plays : 23, likes: 10,  comments: 2},
            {id: 7,  video: '/assets/videos/08.gif',  plays : 5,  likes: 2,   comments: 3},
            {id: 10, video: '/assets/videos/11.gif',  plays : 34, likes: 15,  comments: 6},
        ],
        tagged : [],
        notifications : [
            {id: 0, name: 'lovely_widow', img: '/assets/profiles/black_widow.jfif', type: 'wrote a comment:',     date: 'Yesterday'},
            {id: 1, name: 'wealthy_can',  img: '/assets/profiles/iron_man.jfif',    type: 'wrote a comment:',     date: '5h ago'},
            {id: 2, name: 'falcon',       img: '/assets/profiles/falcon.jfif',      type: 'liked your picture:',  date: '20 min ago'},
            {id: 3, name: 'falcon',       img: '/assets/profiles/falcon.jfif',      type: 'wrote a comment:',     date: '19 min ago'},
        ],
        messages: [
            {id: 0, name: 'falcon',       img: '/assets/profiles/falcon.jfif',          active: true,  read: false},
            {id: 1, name: 'lovely_widow', img: '/assets/profiles/black_widow.jfif',     active: false, read: true},
            {id: 2, name: 'cranky_bucky', img: '/assets/profiles/winter_soldier.jfif',  active: true,  read: true},
            {id: 2, name: 'wealthy_can',  img: '/assets/profiles/iron_man.jfif',        active: false, read: true},
        ]
    },
    { 
        user : {
            id: 1, 
            name: 'wealthy_can',
            text: 'Snap your fingers 👌',
            content: 'Everybody wants a happy ending. Right? But it does not always roll that way.',
            img: '/assets/profiles/iron_man.jfif', 
            url :'ironman'
        },
        posts : [
            {id: 3, img: '/assets/posts/ironman_01.jpg', likes: 11, url :'ironman_01',
             description: 'Vacations by the desert 🌴', tags: [],
             comments: [
                {id: 8, name:'firstavenger', text: 'You look ready to follow Captain America into the jaws of death', img: '/assets/profiles/cap.jfif', reaction: true, url :'captain_america', reply: []},
                {id: 9, name:'itsstrange',   text: 'In The Grand Calculus Of The Multiverse, Their Sacrifice Means Far More Than Their Deaths.', img: '/assets/profiles/drstrange.jpg', reaction: false, url :'dr_strange', reply: []},
                {id: 10, name:'peter_who',    text: 'Looking fresh Mr.Stark', img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
             ]
            },
            {id: 4, img: '/assets/posts/ironman_02.png', likes: 17, url :'ironman_02',
             description: 'So chill after a battle with @firstavenger 😎', tags: ['ironman', 'captain_america'],
             comments: [
                {id: 11, name:'lovely_widow', text: 'Only missing the sweat, from the workout he gave you, you know', img: '/assets/profiles/black_widow.jfif', reaction: false, url :'black_widow', reply: []},
                {id: 12, name:'firstavenger', text: 'We all need family. The Avengers are yours, maybe more so than mine.', img: '/assets/profiles/cap.jfif',   reaction: false, url :'captain_america', reply: []},
                {id: 13, name:'mrgreen',      text: 'I hope that is not my sandwich', img: '/assets/profiles/hulk.jfif', reaction: false, url :'hulk', reply: []},
             ]
            },
            {id: 5, img: '/assets/posts/ironman_03.jpg', likes: 5, url :'ironman_03',
             description: 'Not the best time for tummy ache while wearing my suit...', tags: [],
             comments: [
                {id: 14, name:'that_guy_inthe_corner', text: 'Bathroom is not included in there I suppose', img: '/assets/profiles/black_widow.jfif', reaction: false, url :'black_widow', reply: []},
                {id: 15, name:'iron_wifu',             text: 'Bad timming, darling 💩', img: '/assets/profiles/potts.jpg',  reaction: false, url :'', reply: []},
             ]
            }
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',    img: '/assets/profiles/thor.jpeg',        follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',             img: '/assets/profiles/black_widow.jfif', follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',          img: '/assets/profiles/drstrange.jpg',    follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',       img: '/assets/profiles/spiderman.jfif',   follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',                img: '/assets/profiles/hulk.jfif',        follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',               img: '/assets/profiles/hawkeye.jfif',     follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',   img: '/assets/profiles/falcon.jpg',       follow : true, url: 'falcon' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',         img: '/assets/profiles/antman.jpg',       follow : true, url: 'antman' },
            {id: 13, name: 'iron_wifu',             text: 'Doing bussiness',      img: '/assets/profiles/potts.jpg',         follow : true, url: '' }
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',    img: '/assets/profiles/thor.jpeg',         follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',             img: '/assets/profiles/black_widow.jfif',  follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',          img: '/assets/profiles/drstrange.jpg',     follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',       img: '/assets/profiles/spiderman.jfif',    follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',                img: '/assets/profiles/hulk.jfif',         follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',               img: '/assets/profiles/hawkeye.jfif',      follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',   img: '/assets/profiles/falcon.jpg',        follow : true, url: 'falcon' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',         img: '/assets/profiles/antman.jpg',        follow : true, url: 'antman' },
            {id: 11, name: 'love_b4_life',          text: 'Dead to the world',    img: '/assets/profiles/wandavision.jpg',    follow : true, url: 'wanda_vision' },
            {id: 13, name: 'iron_wifu',             text: 'Doing bussiness',      img: '/assets/profiles/potts.jpg',         follow : true, url: '' }
        ],
        videos : [
            {id: 0,  video: '/assets/videos/01.gif',  plays : 23,  likes: 10,  comments: 3},
            {id: 1,  video: '/assets/videos/02.gif',  plays : 28,  likes: 11,  comments: 5},
            {id: 5,  video: '/assets/videos/06.gif',  plays : 132, likes: 100, comments: 34},
            {id: 8,  video: '/assets/videos/09.gif',  plays : 4,   likes: 10,  comments: 3},
            {id: 10, video: '/assets/videos/11.gif',  plays : 21,  likes: 10,  comments: 5},
            {id: 11, video: '/assets/videos/12.gif',  plays : 52,  likes: 34,  comments: 12},
        ],
        tagged : [],
        notifications : [],
        messages: []
    },
    { 
        user : {
            id: 2, 
            name : 'ilovethunder',
            text: 'Strongest avenger',
            content: 'Nevermore shall men make slaves of others! Not in Asgard--not on Earth--not any place where the hammer of Thor can be swung--or where men of good faith hold freedom dear!',
            img: '/assets/profiles/thor.jpeg', 
            url :'thor'
        },
        posts : [
            {id: 6, img: '/assets/posts/thor_01.jfif', likes: 42, url :'thor_01',
             description: 'My kratos cosplay didn\'t go as planned', tags: [],
             comments: [
                {id: 8, name:'itsstrange',   text: 'Destiny has dire plans for you, my friend', img: '/assets/profiles/drstrange.jpg', reaction: false, url :'dr_strange', reply: []},
                {id: 9, name: 'lil_birdie',      text: 'Seriously? You do cosplay now?',            img: '/assets/profiles/falcon.jpg',    reaction: true,   url :'falcon',    reply: []},
                {id: 10, name:'peter_who',   text: 'I think the nwe haircut looks very good',   img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
             ]
            },
            {id: 7, img: '/assets/posts/thor_02.jfif', likes: 27, url :'thor_02',
             description: 'The battle field of the tough Asgardians', tags: [],
             comments: [
                {id: 11, name:'lovely_widow', text: 'Only missing the sweat, from the workout he gave you, you know', img: '/assets/profiles/black_widow.jfif', reaction: false, url :'black_widow', reply: []},
                {id: 12, name:'wealthy_can', text: 'Doth mother know you weareth her drapes?', img: '/assets/profiles/iron_man.jfif', reaction: false, url :'iron_man', reply: []},
             ]
            },
            {id: 8, img: '/assets/posts/thor_03.jfif', likes: 12, url :'thor_03',
             description: 'Now its the Endgame! Fancy new axe, Stormbreaker, I will leave Mjolnir to kindergarden when this is over', tags: [],
             comments: [
                    {id: 13, name:'firstavenger', text: 'Yeah, we compromised. Sometimes in ways that made us not sleep so well. But we did it so the people could be free.', img: '/assets/profiles/cap.jfif',   reaction: false, url :'captain_america', reply: []},
                    {id: 7, name:'wealthy_can',  text:'If we can\'t protect the Earth, you can be damned well sure we will avenge it!', img: '/assets/profiles/iron_man.jfif', reaction: true, url: 'ironman', reply: []}
             ]
            }
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',    follow : true, url: 'ironman' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',             img: '/assets/profiles/black_widow.jfif', follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',          img: '/assets/profiles/drstrange.jpg',    follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',       img: '/assets/profiles/spiderman.jfif',   follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',                img: '/assets/profiles/hulk.jfif',        follow : false, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',               img: '/assets/profiles/hawkeye.jfif',     follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',   img: '/assets/profiles/falcon.jpg',       follow : true, url: 'falcon' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',         img: '/assets/profiles/antman.jpg',       follow : true, url: 'antman' },
            {id: 14, name: 'lucky_loki',            text: 'Pekaboo',              img: '/assets/profiles/loki.jpg',         follow: false, url: ''}
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',           follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',             img: '/assets/profiles/black_widow.jfif',   follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',          img: '/assets/profiles/drstrange.jpg',      follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',       img: '/assets/profiles/spiderman.jfif',     follow : true, url: 'spiderman' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',               img: '/assets/profiles/hawkeye.jfif',       follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',   img: '/assets/profiles/falcon.jpg',         follow : true, url: 'falcon' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',         img: '/assets/profiles/antman.jpg',         follow : true, url: 'antman' },
        ],
        videos : [
            {id: 0,  video: '/assets/videos/01.gif',  plays : 23, likes: 10,  comments: 3},
            {id: 1,  video: '/assets/videos/02.gif',  plays : 28, likes: 11,  comments: 5},
            {id: 2,  video: '/assets/videos/03.gif',  plays : 15, likes: 9,   comments: 4},
            {id: 6,  video: '/assets/videos/07.gif',  plays : 18, likes: 3,   comments: 2},
            {id: 10, video: '/assets/videos/11.gif',  plays : 21,  likes: 10,  comments: 5},
            {id: 11, video: '/assets/videos/12.gif',  plays : 52,  likes: 34,  comments: 12},
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 3, 
            name : 'lovely_widow',
            text: 'Best ass',
            content: 'Sexiest men are the green angry ones',
            img: '/assets/profiles/black_widow.jfif', 
            url :'black_widow'
        },
        posts : [
           {id: 9, img: '/assets/posts/blackwidow_01.jpg', likes: 42, url :'black_widow_01',
            description: 'Have a taste of my punch 👊', tags: [],
            comments: [
               {id: 14, name: 'baby_widow',   text: 'I really miss those old days of the Black Widows', img: '/assets/profiles/widow.jpg', reaction: true, url :'', reply: []},
            ]
           },
           {id: 10, img: '/assets/posts/blackwidow_02.jfif', likes: 27, url :'black_widow_02',
            description: 'When one threats with throwing a peanutbutter sandwich to a hologram', tags: [],
            comments: [
               {id: 15, name: 'mrgreen', text: 'Sandwich mine!!',  img: '/assets/profiles/hulk.jfif', reaction: false, url :'hulk', reply: []},
            ]
           },
           {id: 11, img: '/assets/posts/blackwidow_03.jpg', likes: 12, url :'black_widow_03',
            description: 'I still wonder if blonde was the right choice there', tags: ['captain_america', 'black_widow'],
            comments: [
                {id: 16, name:'firstavenger', text: 'If I see a situation pointed south, I can\'t ignore it. Sometimes I wish I could', img: '/assets/profiles/cap.jfif',   reaction: false, url :'captain_america', reply: []},
                {id: 17, name:'wealthy_can',  text:'You look like you have friends in low places.', img: '/assets/profiles/iron_man.jfif', reaction: false, url: 'ironman', reply: []},
                {id: 23, name: 'that_guy_inthe_corner', text: 'You And I Remember Budapest Very Differently.', img: '/assets/profiles/hawkeye.jfif',   reaction: true, url :'hawkeye', reply: []},
            ]
           }
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'baby_widow',            text: 'Black Widow pride',   img: '/assets/profiles/widow.jpg',           follow : false, url:''}
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' }
        ],
        videos : [
            {id: 0,  video: '/assets/videos/01.gif',  plays : 23, likes: 10,  comments: 3},
            {id: 1,  video: '/assets/videos/02.gif',  plays : 28, likes: 11,  comments: 5},
            {id: 10, video: '/assets/videos/11.gif',  plays : 34, likes: 15,  comments: 6},
            {id: 11, video: '/assets/videos/12.gif',  plays : 52,  likes: 34,  comments: 12},
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 4, 
            name : 'itsstrange',
            text: 'Mirrorverse',
            content: 'Dormamu!! I\'ve come to bargain!',
            img: '/assets/profiles/drstrange.jpg', 
            url :'dr_strange'
        },
        posts : [
           {id: 12, img: '/assets/posts/drstrange_01.jpg', likes: 22, url :'dr_strange_01',
            description: 'Have a taste of my punch 👊', tags: [],
            comments: [
                {id: 17, name:'wealthy_can',  text: 'You look like you have friends in low places.', img: '/assets/profiles/iron_man.jfif', reaction: false, url: 'ironman', reply: []},
                {id: 18, name:'firstavenger', text: 'No one asked you to look, Tony', img: '/assets/profiles/cap.jfif',   reaction: false, url :'captain_america', reply: []},
            ]
           },
           {id: 13, img: '/assets/posts/drstrange_02.jfif', likes: 13, url :'dr_strange_02',
            description: 'Dormamu!! I\'ve come to bargain!', tags: [],
            comments: [
                {id: 16, name: 'sorcerer_supreme', text: 'It can\'t be...', img: '/assets/profiles/wong.jpg',   reaction: true, url :'', reply: []},
            ]
           }
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',      img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌',   img: '/assets/profiles/iron_man.jfif',    follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',      img: '/assets/profiles/thor.jpeg',        follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',               img: '/assets/profiles/black_widow.jfif', follow : true, url: 'black_widow' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',         img: '/assets/profiles/spiderman.jfif',   follow : true, url: 'spiderman' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',                 img: '/assets/profiles/hawkeye.jfif',     follow : true, url: 'hawkeye' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',           img: '/assets/profiles/antman.jpg',       follow : true, url: 'antman' },
            {id: 11, name: 'love_b4_life',          text: 'Dead to the world',      img: '/assets/profiles/wandavision.jpg',  follow : false, url: 'wanda_vision' },
            {id: 15, name: 'sorcerer_supreme',      text: 'Do not touch the book',  img: '/assets/profiles/wong.jpg',         follow : true, url: '' },
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',      img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌',   img: '/assets/profiles/iron_man.jfif',    follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',      img: '/assets/profiles/thor.jpeg',        follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',               img: '/assets/profiles/black_widow.jfif', follow : true, url: 'black_widow' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',         img: '/assets/profiles/spiderman.jfif',   follow : true, url: 'spiderman' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',                 img: '/assets/profiles/hawkeye.jfif',     follow : true, url: 'hawkeye' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',           img: '/assets/profiles/antman.jpg',       follow : true, url: 'antman' },
            {id: 15, name: 'sorcerer_supreme',      text: 'Do not touch the book',  img: '/assets/profiles/wong.jpg',         follow : true, url: '' },
        ],
        videos : [
            {id: 4,  video: '/assets/videos/05.gif',  plays : 51, likes: 12,  comments: 4},
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 5, 
            name : 'peter_who',
            text: 'Sticky fingers',
            content: 'Great power comes with great responsibility, Aunt May 2022',
            img: '/assets/profiles/spiderman.jfif', 
            url :'spiderman'
        },
        posts : [
           {id: 14, img: '/assets/posts/spiderman_01.jfif', likes: 22, url :'spiderman_01',
            description: 'Yo guys! I\'m in Washington! 🤩', tags: [],
            comments: [
                {id: 19, name:'firstavenger', text: 'I know this neighborhood. I got beat up in that alley. And that parking lot. And behind that diner.', img: '/assets/profiles/cap.jfif',   reaction: false, url :'captain_america', reply: []},
                {id: 20, name:'ilovethunder',  text: 'Because, when something goes wrong, the first thing I always think is, it is Loki\'s fault. It saves a lot of time.', img: '/assets/profiles/thor.jpeg',  reaction: false, url: 'thor', reply: []},
                {id: 44, name:'rip_anthony', text: 'Anyone See A Southern Gentleman Carrying A Building?', img: '/assets/profiles/antman.jpg', reaction: true, url :'antman', reply: []},
            ]
           },
           {id: 15, img: '/assets/posts/spiderman_02.jfif', likes: 13, url :'spiderman_02',
            description: 'Rocking night monkey in Italy 🍕', tags: [],
            comments: [
                {id: 21, name: 'that_guy_inthe_corner', text: 'We Haven\'t Met Yet. I\'m Clint', img: '/assets/profiles/hawkeye.jfif',   reaction: true, url :'hawkeye', reply: []},
                {id: 22, name: 'peter_who', text: 'Nice to meet you!', img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
            ]
           },
           {id: 16, img: '/assets/posts/spiderman_03.jpg', likes: 13, url :'spiderman_03',
           description: 'I\'m such a baddie', tags: ['spiderman', 'dr_strange'],
           comments: [
               {id: 24, name: 'itsstrange', text: 'You are too big for pulling out this shenanigangs 😩', img: '/assets/profiles/drstrange.jpg', reaction: false, url :'dr_strange', reply: []},
               {id: 25, name: 'peter_who', text: 'You are right Steven', img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
               {id: 26, name: 'itsstrange', text: 'It\'s strange', img: '/assets/profiles/drstrange.jpg', reaction: false, url :'dr_strange', reply: []},
               {id: 27, name: 'peter_who', text: 'Ohw, come on! 😭', img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
           ]
          }
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',    follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',         follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',  follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',     follow : true, url: 'dr_strange' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',         follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',      follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',        follow : true, url: 'falcon' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',        follow : true, url: 'antman' },
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',    follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',         follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',  follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',     follow : true, url: 'dr_strange' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',         follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',      follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',        follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',        follow : true, url: 'antman' },
        ],
        videos : [
            {id: 9,  video: '/assets/videos/10.gif',  plays : 54, likes: 12,  comments: 3},
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 6, 
            name : 'mrgreen',
            text: 'Angry',
            content: 'Sandwich, where ??',
            img: '/assets/profiles/hulk.jfif', 
            url :'hulk'
        },
        posts : [
            {id: 17, img: '/assets/posts/hulk_01.jpg', likes: 4, url :'hulk_01',
            description: 'Pls, sandwich?', tags: [],
            comments: [
                {id: 28, name:'lovely_widow', text: 'Peanut Butter?', img: '/assets/profiles/black_widow.jfif', reaction: false, url :'black_widow', reply: []},
                {id: 31, name:'ilovethunder',  text: 'The flesh may be weak but the thunder is strong', img: '/assets/profiles/thor.jpeg',  reaction: false, url: 'thor', reply: []},
            ]
           },
           {id: 18, img: '/assets/posts/hulk_02.jfif', likes: 33, url :'hulk_02',
            description: 'She had stone, I want sandwich!', tags: [],
            comments: [
                {id: 29, name: 'that_guy_inthe_corner', text: 'It Comes With A Price', img: '/assets/profiles/hawkeye.jfif',   reaction: true, url :'hawkeye', reply: []},
                {id: 30, name: 'peter_who', text: 'If you keep something as complicated as love stored up inside, it could make you sick.', img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
            ]
           },

        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',      img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',      img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',      img: '/assets/profiles/thor.jpeg',        follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
        ],
        videos : [
            {id: 0,  video: '/assets/videos/01.gif',  plays : 23, likes: 10,  comments: 3},
            {id: 1,  video: '/assets/videos/02.gif',  plays : 28, likes: 11,  comments: 5},
            {id: 10, video: '/assets/videos/11.gif',  plays : 34, likes: 15,  comments: 6},
            {id: 11, video: '/assets/videos/12.gif',  plays : 52,  likes: 34, comments: 12},
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 7, 
            name : 'that_guy_onthecorner',
            text: 'Shoot!',
            content: 'I heard somewhere, we get a Season 2!',
            img: '/assets/profiles/hawkeye.jfif', 
            url :'hawkeye'
        },
        posts : [
            {id: 19, img: '/assets/posts/hawkeye_01.jpg', likes: 35, url :'hawkeye_01',
            description: 'We all held out breaths, I think someone gassed', tags: ['captain_america', 'wanda_vision', 'antman', 'falcon', 'winter_soldier'],
            comments: [
                {id: 32, name: 'love_b4_life', text: 'Content was deleted', img: '/assets/profiles/wandavision.jpg', reaction: false, url :'wanda_vision', reply: []},
                {id: 33, name: 'lil_birdie',   text: 'I know who!',         img: '/assets/profiles/falcon.jpg',      reaction: true,   url :'falcon',    reply: []},
                {id: 43, name:'rip_anthony', text: 'You guys have the weirdest goodbye rituals', img: '/assets/profiles/antman.jpg', reaction: true, url :'antman', reply: []},

            ]
           },
           {id: 20, img: '/assets/posts/hawkeye_02.jfif', likes: 13, url :'hawkeye_02',
            description: 'This moment got engraved in the mind of a young girl that one day would fight beside me', tags: [],
            comments: [
                {id: 34, name:'lovely_widow', text: 'That sounds just wrong', img: '/assets/profiles/black_widow.jfif', reaction: false, url :'black_widow', reply: []},
            ]
           },
           {id: 21, img: '/assets/posts/hawkeye_03.jpg', likes: 13, url :'hawkeye_03',
            description: 'I work alone, but having you as a partner was not so bad @that_hawkeye_fan', tags: [],
            comments: [
                {id: 35, name: 'that_hawkeye_fan', text: 'I also had a great time 🤗', img: '/assets/profiles/hawkeye_fan.jpg',   reaction: true, url :'hawkeye', reply: []},
                {id: 30, name: 'peter_who', text: 'If you keep something as complicated as love stored up inside, it could make you sick.', img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
            ]
           },
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',   img: '/assets/profiles/cap.jfif',            follow : true, url: 'captain_america' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
            {id: 18, name: 'that_hawkeye_fan',      text: 'Hawkeye is my fav',   img: '/assets/profiles/hawkeye_fan.jpg',     follow : false, url: '' }
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',   img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
            {id: 11, name: 'love_b4_life',          text: 'Dead to the world',   img: '/assets/profiles/wandavision.jpg',     follow : true, url: 'wanda_vision' }
        ],
        videos : [
            {id: 0,  video: '/assets/videos/01.gif',  plays : 23, likes: 10,  comments: 3},
            {id: 1,  video: '/assets/videos/02.gif',  plays : 28, likes: 11,  comments: 5},
            {id: 3,  video: '/assets/videos/04.gif',  plays : 23, likes: 10,  comments: 2},
            {id: 10, video: '/assets/videos/11.gif',  plays : 34, likes: 15,  comments: 6},
            {id: 11, video: '/assets/videos/12.gif',  plays : 52,  likes: 34,  comments: 12},
        ],
        tagged : [],
        notifications : [
            {id: 0, name: '', text: '', img: '', type: '', date: ''},
        ],
        messages: [
            {id: 0, name:'', img:'', active: false},
        ]
    },
    { 
        user : {
            id: 8, 
            name : 'lil_birdie',
            text: 'I\'m like a bird 🎶 ',
            content: 'Nominated for Black Captain America',
            img: '/assets/profiles/falcon.jpg', 
            url :'falcon'
        },
        posts : [
           {id: 22, img: '/assets/posts/hawkeye_02.jfif', likes: 13, url :'hawkeye_02',
            description: 'No one came to say hi when I arrived 😓', tags: [],
            comments: [
                {id: 36, name:'firstavenger', text: 'I think there was no one home 😄', img: '/assets/profiles/cap.jfif', reaction: true, url :'captain_america', reply: []},
                {id: 42, name:'rip_anthony', text: 'Okay, The First Thing We Should Do…Is Call The Avengers', img: '/assets/profiles/antman.jpg', reaction: true, url :'antman', reply: []},
            ]
           },
           {id: 23, img: '/assets/posts/hawkeye_03.jpg', likes: 13, url :'hawkeye_03',
            description: 'Playing cowboy in the air, up with your hands!', tags: [],
            comments: [
                {id: 37, name: 'wealthy_can', text: 'Handy when one is bulletproof', img: '/assets/profiles/iron_man.jfif', reaction: true, url: 'ironman', reply: []},
                {id: 38, name: 'peter_who', text: '🤷‍♂️', img: '/assets/profiles/spiderman.jfif', reaction: false, url :'spiderman', reply: []},
            ]
           },
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',      img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',      img: '/assets/profiles/cap.jfif',         follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
        ],
        videos : [
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 9, 
            name : 'cranky_bucky',
            text: '...',
            content: 'No, I do not do follow for follow',
            img: '/assets/profiles/winter_soldier.jfif', 
            url: 'winter_soldier'
        },
        posts : [
           {id: 24, img: '/assets/posts/winter_soldier_01.jfif', likes: 1, url :'winter_soldier_01',
            description: 'Congratulations on your own show @lil_birdie', tags: ['winter_soldier', 'falcon'],
            comments: [
                {id: 39, name:'lil_birdie', text: 'Same to you man! I is our show', img: '/assets/profiles/falcon.jpg', reaction: true, url :'falcon', reply: []},
                {id: 40, name:'cranky_bucky', text: 'I did not ask for it', img: '/assets/profiles/winter_soldier.jfif', reaction: true, url :'winter_soldier', reply: []},
            ]
           },
           {id: 25, img: '/assets/posts/winter_soldier_02.jfif', likes: 3, url :'winter_soldier_02',
            description: 'Aiming got much harder after CoronaVirus', tags: [],
            comments: [
                {id: 41, name: 'wealthy_can', text: 'Nice, you do not go around killing others\' mothers', img: '/assets/profiles/iron_man.jfif', reaction: false, url: 'ironman', reply: []},
            ]
           },
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',   img: '/assets/profiles/cap.jfif',            follow : true, url: 'captain_america' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : false, url: 'spiderman' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : false, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : false, url: 'antman' },  
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',   img: '/assets/profiles/cap.jfif',            follow : true, url: 'captain_america' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
        ],
        videos : [
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 10, 
            name : 'rip_anthony',
            text: 'My bestie 🐜',
            content: 'We are at Anthony 5th, you will be remembered!',
            img: '/assets/profiles/antman.jpg', 
            url :'antman'
        },
        posts : [
           {id: 25, img: '/assets/posts/antman_01.png', likes: 1, url :'antman_01',
            description: 'Who could forget my noble steed, ', tags: [],
            comments: [
                {id: 39, name:'lil_birdie', text: 'Same to you man! I is our show', img: '/assets/profiles/falcon.jpg', reaction: true, url :'falcon', reply: []},
                {id: 40, name:'cranky_bucky', text: 'I did not ask for it', img: '/assets/profiles/winter_soldier.jfif', reaction: true, url :'winter_soldier', reply: []},
            ]
           },
           {id: 26, img: '/assets/posts/antman_02.jpeg', likes: 3, url :'antman_02',
            description: 'Everything Is Unpredictable. Is That Anybody\'s Sandwich? I\'m Starving', tags: [],
            comments: [
                {id: 45, name:'mrgreen', text: 'No sandwich you little', img: '/assets/profiles/hulk.jfif', reaction: false, url :'hulk', reply: []},
            ]
           },
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',   img: '/assets/profiles/cap.jfif',            follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
        ],
        following : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',   img: '/assets/profiles/cap.jfif',            follow : true, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : true, url: 'ironman' },
            {id: 2,  name: 'ilovethunder',          text: 'Strongest avenger',   img: '/assets/profiles/thor.jpeg',           follow : true, url: 'thor' },
            {id: 3,  name: 'lovely_widow',          text: 'Best ass',            img: '/assets/profiles/black_widow.jfif',    follow : true, url: 'black_widow' },
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
            {id: 5,  name: 'peter_who',             text: 'Sticky fingers',      img: '/assets/profiles/spiderman.jfif',      follow : true, url: 'spiderman' },
            {id: 6,  name: 'mrgreen',               text: 'Angry',               img: '/assets/profiles/hulk.jfif',           follow : true, url: 'hulk' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : true, url: 'hawkeye' },
            {id: 8,  name: 'lil_birdie',            text: 'Im like a bird 🎶 ',  img: '/assets/profiles/falcon.jpg',          follow : true, url: 'falcon' },
            {id: 9,  name: 'cranky_bucky',          text: '...',                 img: '/assets/profiles/winter_soldier.jfif', follow : true, url: 'winter_soldier' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : true, url: 'antman' },
        ],
        videos : [
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
    { 
        user : {
            id: 11, 
            name : 'love_b4_life',
            text: 'Dead to the world',
            content: 'Everything is gone',
            img: '/assets/profiles/wandavision.jpg', 
            url :'wanda_vision'
        },
        posts : [
        ],
        followers : [
            {id: 0,  name: 'firstavenger',          text: 'Chilling 75 years',    img: '/assets/profiles/cap.jfif',         follow : false, url: 'captain_america' },
            {id: 1,  name: 'wealthy_can',           text: 'Snap your fingers 👌', img: '/assets/profiles/iron_man.jfif',      follow : false, url: 'ironman' },
            {id: 7,  name: 'that_guy_inthecorner',  text: 'Shoot!',              img: '/assets/profiles/hawkeye.jfif',        follow : false, url: 'hawkeye' },
            {id: 10, name: 'rip_anthony',           text: 'My bestie 🐜',        img: '/assets/profiles/antman.jpg',          follow : false, url: 'antman' },
        ],
        following : [
            {id: 4,  name: 'itsstrange',            text: 'Mirrorverse',         img: '/assets/profiles/drstrange.jpg',       follow : true, url: 'dr_strange' },
        ],
        videos : [
        ],
        tagged : [],
        notifications : [
        ],
        messages: [
        ]
    },
]

const suggested = [
    {id: 0, name: 'incredible_ultron', img: '/assets/profiles/ultron.jfif',     status: 'Death to humanity'},
    {id: 1, name: 'your_friendly_pal', img: '/assets/profiles/thanos.jpg',      status: 'Less is more'},
    {id: 2, name: 'bloody_hell',       img: '/assets/profiles/red-skull.jpg',   status: 'Im blue'},
    {id: 3, name: 'lucky_loki',        img: '/assets/profiles/loki.jpg',        status: 'Pekaboo'},
    {id: 4, name: 'el_demonio',        img: '/assets/profiles/hela.png',        status: 'I am back'},
    {id: 5, name: 'alone_inthe_world', img: '/assets/profiles/wanda-dark.jfif', status: '...'},
    {id: 6, name: 'baby_widow',        img: '/assets/profiles/widow.jpg',       status: 'Black Widow pride'}
]

const data = {
    menu:   {
        logo: '/assets/instagram.png',
        search_bar: '/assets/search.svg',
        iconos: [
            {id: 0, src: '/assets/home.svg',           alt: 'home'},
            {id: 1, src: '/assets/plane.svg',          alt: 'plane'},
            {id: 2, src: '/assets/plus.svg',           alt: 'plus'},
            {id: 3, src: '/assets/compass.svg',        alt: 'compass'},
            {id: 4, src: '/assets/heart.svg',          alt: 'heart'},
            {id: 5, src: '/assets/profiles/cap.jfif',  alt: 'profile'},
        ]},
    profile: [
        {id: 5, src: '/assets/photo.svg',    alt: '/photo'},
        
        {id: 2, src:'/assets/bookmark.svg'},
        {id: 7, src: '/assets/profile.svg',  alt: '/profile'}
    ],
    home : {
        icons: [
            {id: 0, src: '/assets/heart.svg',     alt: 'icon1'},
            {id: 1, src: '/assets/chat.svg',      alt: 'icon2'},
            {id: 2, src: '/assets/plane.svg',     alt: 'share'},
        ],
        dots: '/assets/dots.svg',
        bookmark: '/assets/bookmark.svg',
        little_heart: '/assets/little_heart.svg',
        emoji: '/assets/emoji.svg'
    },
    submenu: [
        {id: 0, src:'/assets/info.svg'},
        {id: 1, src:'/assets/bookmark.svg'},
        {id: 2, src:'/assets/settings.svg'},
        {id: 3, src:'/assets/switch.svg'},
    ]
}

const footer = [
    'About',     'Help',        'Press',
    'Api',       'Jobs',        'Privacy',
    'Terms',     'Locations',   'Language'
]

