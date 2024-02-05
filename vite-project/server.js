import express from  'express'
import ViteExpress from 'vite-express'
import crypto from 'crypto';
// import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import sessions from 'express-session';

const app = express()

app.use( express.json() )

// process.port = 3000;

// let validate=(email)=>
//   RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?").test(email);

// let uuid=()=>crypto.randomUUID();

// /*
// DB structure:
// {
//   'users':{
//     'email1':{<user data>}
//     'email2':{<user data>}
//     ...
//   },
//   'sessions':{
//     'id1':'email1'
//     ...
//   }
// */

// let DB = {
//   users:{},
//   sessions:{},
//   pullUsers:async()=>DB.users = await DB.db.get('users'),
//   pullSessions:async()=>DB.sessions = await DB.db.get('sessions'),
//   pushUsers:async()=>await DB.db.set('users',DB.users),
//   pushSessions:async()=>await DB.db.set('sessions',DB.sessions),
  
//   // db handle
//   db:new (require("@replit/database"))(),
//   //reset:async()=>{await DB.db.set('users',{}), await DB.db.set('sessions',{})},
  
//   signup:async(email,password)=>{
//     await DB.pullUsers();
//     let defaultUser = {
//       'password':password,
//       'email':email,
//       'pts':0,
//       'data':'00000',
//     }
//     let existing = Object.keys(DB.users).includes(email);
//     if (existing) {
//       // signup failed: email in use
//       return null;
//     } else {
//       DB.users[email] = defaultUser;
//       await DB.pushUsers();
//       return await DB.newSession(email);
//     }
//     // if (await DB.db.get(email)) {
//     //   return false;
//     // }
//     // return await DB.db.set(email,defaultUser).then(()=>true).catch(()=>false);
//   },
//   newSession:async(email)=>{
//     let sid=uuid();
//     await DB.pullSessions();
//     DB.sessions[sid]=email;
//     await DB.pushSessions();
//     return sid;
//   },
//   login:async(email,password)=>{
//     await DB.pullUsers();
//     let user = Object.keys(DB.users).includes(email);
//     if (user) {
//       user = DB.users[email];
//       if (user.password == password) {
//         // login OK
//         return await DB.newSession(email);
//       } else {
//         // wrong password: send 401
//         return null;
//       }
//     } else {
//       // unknown email: send 401
//       return null;
//     }
//   },
//   logout:async(id)=>{
//     await DB.pullSessions();
//     let email = Object.keys(DB.sessions).includes(id);
//     if (email) {
//       let status = delete DB.sessions[id];
//       await DB.pushSessions();
//       return status;
//     } else {
//       return false;
//     }
//   },
//   save:async(id,data)=>{
//     // let user = await DB.db.get(email);
//     // if (user) {
//     //   user.data=data;
//     //   return await DB.db.set(email,user).then(()=>true).catch(()=>false);
//     // } else{
//     //   return false;
//     // }
//     let user = await DB.getUserById(id);
//     if (user) {
//       user.data = data;
//       DB.pushUsers();
//       return true;
//     } else {
//       return false;
//     }
//   },
//   load:async(id)=>{
//     // let user = await DB.db.get(email);
//     // if (user) {
//     //   return user.data;
//     // } else {
//     //   // unknown email: send 401
//     //   return false;
//     // }
//     let user = await DB.getUserById(id);
//     if (user) {
//       return user;
//     } else {
//       return null;
//     }
//   },
//   getUserById:async(id)=>{
//     await DB.pullUsers();
//     await DB.pullSessions();
//     let email = Object.keys(DB.sessions).includes(id);
//     if (email) {
//       email = DB.sessions[id];
//       let user = Object.keys(DB.users).includes(email);
//       if (user) {
//         user = DB.users[email];
//         return user;
//       } else {
//         // no user with that email
//         return null;
//       }
//     } else {
//       // no session with that id
//       return null;
//     }
//   },
// }

// // let S={
// //   s:{},
// //   add:function(email){
// //     let u=uuid();
// //     let d={
// //       email:email,
// //     };
// //     S.s[u]=d;
// //     return u;
// //   },
// //   clear:function(u){
// //     return delete S.s[u];
// //   },
// //   check:function(u){
// //     let e = Object.keys(S.s).includes(u);
// //     if(e) return S.s[u];
// //     else return null;
// //   }
// // }


// app
// .set("trust proxy", 1)
// .use(require('cors')({
//   origin:/\.copticwordle\.repl\.co/,/*check this*/
//   credentials:true,
// }))
// .use(express.json())
// // .use(
// //   sessions({
// //     secret:'abcdef',
// //     saveUninitialized: true,
// //     resave: true,
// //     httpOnly: false,
// //     cookie:{
// //       secure:true,
// //       sameSite:'lax',
// //       domain:'.copticwordle.repl.co',
// //     }
// //   })
// // )
// .use(cookieParser())


// .get('/',async(req, res)=>{
//   //res.sendStatus(404);
//   //let list=await DB.db.list();
//   //res.send(list);
//   //await DB.pullUsers();
//   //res.send(Object.keys(DB.users));
//   res.sendStatus(200);
// })

// // .get('/sessions',async(req, res)=>{
// //   //res.sendStatus(404);
// //   //let list=await DB.db.list();
// //   //res.send(list);
// //   await DB.pullSessions();
// //   res.send(DB.sessions);
// // })

// // .get('/cookies',async(req, res)=>{
// //   res.send(req.cookies);
// // })

// .post('/signup',async(req,res)=>{
//   let body=req.body;
//   let valid = validate(body.email);
//   if (!valid) {
//     console.log("your a bad email")
//     res.status(401).send({'message':'Invalid email.'});
//     return;
//   }
//   let sid = await DB.signup(body.email,body.password);
//   //console.log('new signup: ',body.email,'=',body.password);
//   //console.log('sid:',sid);
//   if (sid) {
//     // req.session.email=body.email;
//     // req.session.save();
//     res.status(200).send({'id':sid});
//   } else{ 
//     res.status(401).send({'message':'Email already in use.'});
//   }
// })

// .post('/login',async(req,res)=>{
//   let body=req.body;
//   let sid = await DB.login(body.email,body.password);
//   //
//   if (sid) {
//     //req.session.email=body.email;
//     //req.session.save();
//     res.status(200).send({'id':sid});
//   } else{ 
//     res.status(401).send({'message':'Invalid credentials.'});
//   }
// })

// .post('/logout',async(req, res)=>{
//   let body=req.body;
//   let sid=body.id;
//   //console.log('logging out user:',sid);
//   let success=await DB.logout(sid);
//   res.status(success ? 200 : 401).send({"message": success ? 'ok' : 'Invalid id.'});
// })

// .post('/saveData',async(req, res)=>{
//   let body=req.body;
//   let sid=body.id;
//   let data=body.data;
//   //let d=S.check(id);
//   // let success=d&&d.email;
//   // if(success){
//   //   success = await DB.save(d.email, data);
//   // }
//   let success=await DB.save(sid,data);
//   res.status(success ? 200 : 401).send({"message": success ? 'ok' : 'Invalid id.'});
// })

// .post('/loadData', async(req, res)=>{
//   let body=req.body;
//   let sid=body.id;
//   // let d=S.check(id);
//   // let success=d&&d.email;
//   let user=await DB.load(sid);
//   if(user){
//     res.status(200).send({'data':user.data});
//   } else{
//     res.status(401).send({'message':'Invalid id.'});
//   }
// })

// .use((req,res)=>{res.sendStatus(404);})

// .use((e,req,res,n)=>{
//   console.error(e);
//   res.sendStatus(500);
// })

// .listen(process.port,async ()=>{
//   //await DB.reset(); // for debugging only!
//   console.log('server running on port '+process.port);
// });

ViteExpress.listen( app, 3000 )