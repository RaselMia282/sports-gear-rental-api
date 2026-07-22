import app from "./app"

const PORT = process.env.PORT||8000
async function main () {
    try {
        app.listen(PORT,()=>{
            console.log(`sports-gear-rental-api server is running on port ${PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        
    }
    
}
main()