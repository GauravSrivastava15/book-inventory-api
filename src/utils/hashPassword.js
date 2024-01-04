import bcrypt from 'bcrypt'


export const hashPassword = async (password,next) =>{
    try{
        return await bcrypt.hash(password,12)
    }catch(err){
        // console.log("Error while hashing password")
        return err
    }
}

export const compareHashPassword = async (password, hashedPassword, next) =>{
    try{
        return await bcrypt.compare(password,hashedPassword)
    }catch(err){
        // console.log("errror while comparing password")
        return err
    }
}
