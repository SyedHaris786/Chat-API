const addBlog = async (req,res)=>{

    console.log('Insert data');
   }

const readBlog = async (req,res)=>{

    console.log('read data');
    res.send('Parho parho')
}

const updateBlog = async (req,res)=>{

    console.log('edit data');
}

const removeBlog = async (req,res)=>{

    console.log('delete data');
}

module.exports = {  addBlog,
                    readBlog,
                    updateBlog,
                    removeBlog
                }