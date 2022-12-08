class super_market{
    constructor(c){
        let product_name;
        let product_price;
        let count;
        this.count=c;

    }
    stock(){
        this.product_name=document.getElementById("s1").value;
        this.count--;
        if(this.count>=1){
            let h1=document.createElement("h3");
            h1.innerHTML=`available,balance = ${this.count}`;
            h1.style = "padding-left:65%;font-family:times_new_roaman";
            document.body.appendChild(h1); 
        }
        else{
            let h1=document.createElement("h3");
            h1.innerHTML="not available";
            h1.style = "padding-left:65%;font-family:times_new_roaman";
            document.body.appendChild(h1);
        }
   
    }
    cart(){
        let car=document.getElementById("s1").value;
        let car1=[];
        car1.push=car;


    }
    billing(){
        let tomato=10;
        let potato=15;
        let cabbage=10;
        let carrot=14;
        let onion=20;
        let mushroom=18;
        let broccoli=25;
        let capsicum=20;
        let brinjal=25;
        let corn=40;
        let garlic=10;
        let pumpkin=50;
        let beetroot=15;

    }
    offer(){
        let previous_offer,current_offer,coming_offer;

    }

}

const manage = new super_market(10);