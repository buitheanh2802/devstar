
class QuestionController {
    renderQuestionPage(req,res){
        res.render('question',{
            title : 'Hỏi đáp - DevSkill',
            stickyHeader : true,
            page : {
                isQuestionPage : true
            }
        })
    }

}

export default new QuestionController();