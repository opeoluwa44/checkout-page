const removeBag = document.querySelector(".minus")
const addBag = document.querySelector(".plus")
const numberBag = document.querySelector(".num")

const removeShoe = document.querySelector(".minus2")
const addShoe = document.querySelector(".plus2")
const numberShoe = document.querySelector(".num2")

const totalPrice = document.querySelector(".total")



count1= 1
count2= 1



function quantity(subtract, add, number, count, total){
    subtract.addEventListener("click", ()=>{
        count--
        
        if(count < 0){
            count = 0
            
        }else{
           
        number.textContent = count 
       
        total()

    }
    })
    
    add.addEventListener("click", () =>{
        count++
       
        number.textContent = count
        
        total()
        
    })

    
}


quantity(removeBag, addBag, numberBag, count1, total)
quantity(removeShoe, addShoe, numberShoe, count2, total)


function total(){
   totalBag = numberBag.textContent * 54.99
    totalShoe = numberShoe.textContent * 74.99

    totality = totalBag + totalShoe + 19
    //explicit = Math.round(totality)

    totalPrice.textContent = `$${totality}`


}