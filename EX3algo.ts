/* EX1.3 ET 1.4 ALGORITHMIQUE*/ 
//function change(A,B,Aux:number){
  
  //  Aux=A;
    //console.log("Auxf=",Aux)
    //A=B;
   // console.log("Af=",A)
   // B=Aux;
   // console.log("Bf=",B)
   // return A;
//}
//var A=5;
//var B=9;
//var Aux:number;
//Aux=A;
//A=B;
//B=Aux;
//var Aux: number =0;
//var A:number=15;
//var B:number=7;
//console.log(change(A,B,Aux));
//console.log("A=", A);
//console.log("B=", B);
//console.log("Aux=", Aux);
//let A: number=1;
//let B: number=2;
//let C: number=3;
//let T: number[] = [A, B, C];
//console.log(T);
//let T1: number[]=[];
//T1[0]=C;
//T1[1]=A;
//T1[2]=B;
//console.log(T1);
 /**************************  EX3.1 Algo*********************************/
//function posneg (A:number) {
  //  if (A>0) {
    //    return "positive";
    //}
    //else {return "négative";}
//}
//console.log(posneg(-10));
/* ***********************EX3.2**************************/
//function prod (A,B:number){
 //   if ((A>0 && B>0) || (A<0 && B<0)) {
//return "positive";
  //  }
   // else {return "négative";}  
//}
//console.log(prod(-6,10));
/* ****************************** EX4.2 *******************/
//function nbr(A:number){
  //   if (A<10) {
    //    return "plus grand";
    //}
    //else if (A>20){ return "plus petit";}
//}
//console.log(nbr(21));
/*********************************EX4.3 et 4.4********************** */
//function suiv (A:number){
  //  var T:number[]=[];
    //for(var i=1; i<11; i++){
    // T[i]=A*i;
    //}
    //return T;
//}
//console.log(suiv(5));
/*  EX 4.5 ***********/
//function suiv (A:number){
  // var K:number=0;
    //for(var i=1; i<=A; i++){
     //K=K+i
    //}
    //return K;
//}
//console.log(suiv(5));
/***************************************  EX4.7 *****************/
//let A: number=1;
//let B: number=2;
//let C: number=3;
//let D: number=3;
//let E: number=3;
//function plusG (){
    
  //  var T:number[]=[A,B,C,D,E];
  //  var k = T[0];
  //  for (let i=1; i<T.length;i++){
     
        
      //  console.log(k);
      //  if(k < T[i+1])
      //  {
       //     k=T[i+1];
       // }
       // return k;
    //}
    
//}
//console.log(plusG());
/*********************************Ex5.3 *********************/
/*let A: number=1;
let B: number=2;
let C: number=3;
let D: number=-3;
let E: number=-3;
function Posneg(){
   var T:number[]=[A,B,C,D,E]
   console.log(T);
   var T2:number[]=[P,N];
   var P=0;
    var N=0;
    console.log(P);
    for (var i=0;i<T.length;i++){
        
        if (T[i]>0) {
            P=P+1;
            console.log("P=",P);
        }
        else {N=N+1;
            console.log("N=",N);
        } 
 }
 T2[0]=P;
 T2[1]=N;
 return (T2);
}
console.log(Posneg());*/
/*********  EX5.5 ******************************/
/*let A: number=1;
let B: number=2;
let C: number=3;
let D: number=3;
let E: number=3;
function somme(){
    var T:number[]=[A,B,C,D,E]
var Sme=0;
    for (var i=0;i<T.length;i++){
        Sme=Sme+T[i];
}
return Sme;
}
console.log(somme());*/
/**************************  Exercice palindrome************************ */
/*let i:number =0;
let ch: string ="aalaa";
function palindrom(ch:string){
  var L:number=ch.length;
  var res:string="Palindrome";
  var i:number=0;
  while (res && (i<(L/2))) { 
    if (ch[i] != ch[L-i-1]) {
      res ="n'est pas palindrome";
    }
i=i+1;
  }
return res;
}
console.log(palindrom(ch));*/
/***************************EX10.5*****************************/
/*let A: number=-1;
let B: number=2;
let C: number=-7;
let D: number=-3;
let E: number=3;
function TPN(){
    var T:number[]=[A,B,C,D,E]
var TN:number[]=[];
var j:number=0;
var TP:number[]=[];
var k:number=0;
    for (var i=0;i<T.length;i++){
        if (T[i]<0) {
        TN[j]=T[i];
        j=j+1;
        }
        else{
          TP[k]=T[i];
          k=k+1;
        }
}
console.log(T);
console.log(TP);
return TN;
}
console.log(TPN());*/
/*let n:number=7;
function triangle(n:number){
var ch:String="";
var k:number;
k=n;
for(var i=1;i<=k;i++){
  ch="";
  for(var j=1;j<=k;j++){
    ch=ch+"*";
     }
console.log(ch);
  k=k-2;
  
}
if (k==1){ 
ch="*"; }
return(ch);
}
console.log(triangle(n));*/
/*var U:number[]=[];
U[0]=1;
U[1]=3;
function suite(n:number){
for (var i=2;i<n;i++){
 U[i]=2*U[i-1]+3*U[i-2];
  
}
return U[n-1];
}
console.log(suite(5));*/
/*let A: number=1;
let B: number=2;
let C: number=7;
let D: number=5;
let E: number=3;
function Tabsdoublon(){
  var T:number[]=[A,B,C,D,E]
  console.log(T);
  var x:number=10;
  var ix:number=2;
  var K:number;
  var Y:number;
  for (var i=0;i<=T.length;i++){
    if(i==ix) {
    K=T[i];
    T[i]=x; 
    Y=T[i+1];
    T[i+1]=K;}
    }
    return (T);
}
console.log(Tabsdoublon());*/
