let list1=['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata']
let list2=['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi']
let unique_list1=[], unique_list2=[] ,common_list=[]

// first of get the set of values of list1 different to  list2
for (let i=0 ; i<list1.length;i++){
    let found=false
    for (let j=0; j<list2.length; j++){
        if(list1[i]===list2[j]){
        found=true 
        break;

    }
}
if(!found) unique_list1.push(list1[i]);
}
   

console.log(unique_list1)


//first of get the set values of list2 different to list1
for (let i=0 ; i<list2.length;i++){
    let found=false
    for (let j=0; j<list1.length; j++){
        if(list2[i]===list1[j]){
        found=true 
        break;
    }
}
if(!found) unique_list2.push(list2[i])
}
console.log(unique_list2)



//get set of values present in both list1 and list2
for (let i=0;i<list1.length;i++){
    for (let j=0; j<list2.length ; j++){
        if(list1[i]===list2[j]){
            common_list.push(list1[i])
            break

        }
    }
}
console.log(common_list)
 // successfully got output