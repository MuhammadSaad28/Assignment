alert("Height must be in centimetre (cm) and weight must be in kilogram (kg)");
function BMI()
{
    
  let weight = +document.querySelector("#weight").value ;
  let heightcm = +document.querySelector("#height").value ;
  let heightm = heightcm / 100 ;

  let BMI = weight / (heightm * heightm);
  // document.write(BMI);
  // console.log(BMI);
document.querySelector("#ha").innerHTML=`Your Body Mass Index is ${BMI}`

}