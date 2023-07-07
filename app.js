const data = [
    {
        id :"daily",
        data_info : {
            work :{
                current : 5,
                previous: 7 
            },
            play :{
                current : 1,
                previous :2 
            },
            study :{
                current : 0,
                previous:1
            },
            exercise :{
                current : 1,
                previous :1 
            },
            social :{
                current : 1,
                previous :3 
            },
            self :{
                current : 0,
                previous :1 
            },
        }
    },
    {
        id :"weekly",
        data_info :{
            work :{
                current : 32,
                previous: 36 
            },
            play :{
                current : 10,
                previous :8 
            },
            study :{
                current : 4,
                previous:7
            },
            exercise :{
                current : 4,
                previous :5 
            },
            social :{
                current : 5,
                previous :10 
            },
            self :{
                current : 2,
                previous :2 
            },
        }
    },
    {
        id :"monthly",
        data_info :{
            work :{
                current : 103,
                previous: 128 
            },
            play :{
                current : 23,
                previous :29 
            },
            study :{
                current : 13,
                previous:19
            },
            exercise :{
                current : 11,
                previous :18 
            },
            social :{
                current : 21,
                previous :23 
            },
            self :{
                current : 7,
                previous :11 
            },
        }
    }
]
const chooce_parent = document.querySelector("ul")
const chooces = document.querySelectorAll("ul li")

chooces.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        // remove classactive
        chooce_parent.querySelector(".active").classList.remove("active")
        // now add the active class
        ch.classList.add("active")

        let chooce_id = ch.getAttribute('data-chooce');
        console.log(chooce_id)
        data.map((d)=>{
            if (d.id === chooce_id){
                for (let [key , value] of Object.entries(d.data_info)){
                    document.querySelector(`.${key} h1 span`).innerText = value.current
                    document.querySelector(`.${key} p span`).innerText = value.previous
                }
            }
        })
    })
})