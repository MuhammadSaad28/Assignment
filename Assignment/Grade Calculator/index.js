function calc()
{
    let name1=document.querySelector("#na").value;
    let totalmarks=+document.querySelector("#tm").value;
    let obtainedmarks=+document.querySelector("#om").value;
    let result=(obtainedmarks/totalmarks)*100;

    if(result>=90)
    {
        document.querySelector("#re").innerHTML=`You got ${result} % marks and Your grade is A+`;
    }
    else if(result<90 && result>=80)
    {
        document.querySelector("#re").innerHTML=`You got ${result} % marks and Your grade is A`;
    }
    else if(result<80 && result>=70) 
    {
        document.querySelector("#re").innerHTML=`You got ${result} % marks and Your grade is B`;
    }
    else if(result<70 && result>=60)
    {
        document.querySelector("#re").innerHTML=`You got ${result} % marks and Your grade is C`;
    }
    else if(result<60 && result>=50)
    {
        document.querySelector("#re").innerHTML=`You got ${result} % marks and Your grade is D`;
    }
    else
    {
        document.querySelector("#re").innerHTML=`You got ${result} % marks and Your grade is F and You are Fail`;
    }

    
}