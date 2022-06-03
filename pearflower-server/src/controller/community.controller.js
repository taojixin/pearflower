const connections = require('../app/database')
class CommunityController {
  // 书写我的文章
   async writEssay(req, res, next) {
     console.log("sdfsdf");
    // 文章标题，内容，时间，作者，作者id
    const { title,content,time,author,authorId } = req.body.essayMessage
    console.log(title,content,time,author,authorId);
    const statement = `INSERT INTO essay(essay_title,essay_content,essay_createtime,essay_author,essay_authorid)
    VALUES(?,?,?,?,?);`
    try {
      await connections.execute(statement, [title,content,time,author,authorId])
    } catch {
      res.json({
        meta: {
          message: '发布失败！',
          code: 1
        }
      })
    }
    res.json({
      meta: {
        message: '发布成功！',
        code: 0
      }
    })
    
  }
}

module.exports = new CommunityController();