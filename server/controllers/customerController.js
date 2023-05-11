

exports.homepage = async (req, res) => {

    
    const locals = {
        title: "CRUD | User Management",
        description: "A user management using nodejs and expressjs"
    }
    res.render('index', locals)
}