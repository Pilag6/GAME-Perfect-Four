


let leyenda = ["😎 You guessed it!!! 😎", "Two well located + Two well"]

function gamePila(num1, num2, num3, num4) {
  primer = 1;
  second = 2;
  third = 3;
  fourth = 4;

  // I NEED: 
  // 1) Random Numbers 2)  


  [num1,num2,num3,num4] = prompt("Write a 4-Digit Number without repeating any number.");
  
  // num1 = prompt("Write the First Number between 0 and 9");
  // num2 = prompt("Write the Second Number between 0 and 9");
  // num3 = prompt("Write the Third Number between 0 and 9");
  // num4 = prompt("Write the Fourth Number between 0 and 9");

  document.write("<h2 class='second'>" + "You have chosen this number:" + "</h2>")

  document.write("<h2 class='number'>" + num1,num2,num3,num4 + "</h2>");

  
  
  if (primer == num1 && second == num2 && third == num3 && fourth == num4) {
    return leyenda[0];

   
    // Two well located  + Two well//
  } else if (
    ((primer == num1 && second == num2 && third != num3 && fourth != num4) ||
      (primer == num1 && second != num2 && third == num3 && fourth != num4) ||
      (primer == num1 && second != num2 && third != num3 && fourth == num4) ||
      (primer != num1 && second == num2 && third == num3 && fourth != num4) ||
      (primer != num1 && second == num2 && third != num3 && fourth == num4) ||
      (primer != num1 && second != num2 && third == num3 && fourth == num4)) &&

    (((primer == num2 || primer == num3 || primer == num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third != num1 || third != num2 || third != num4) && // 1° & 2°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer == num2 || primer == num3 || primer == num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third == num1 || third == num2 || third == num4) && // 1° & 3°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer == num2 || primer == num3 || primer == num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third != num1 || third != num2 || third != num4) && // 1° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)) ||


      ((primer != num2 || primer != num3 || primer != num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third == num1 || third == num2 || third == num4) && // 2° & 3°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer != num2 || primer != num3 || primer != num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third != num1 || third != num2 || third != num4) && // 2° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)) ||


      ((primer != num2 || primer != num3 || primer != num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third == num1 || third == num2 || third == num4) && // 3° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)))

  ) {
    return "Two well located + Two well";



    // Two well located  + One well//
  } else if (
    (primer == num1 && second == num2 && third != num3 && fourth != num4) ||
    (primer == num1 && second != num2 && third == num3 && fourth != num4) ||
    (primer == num1 && second != num2 && third != num3 && fourth == num4) ||
    (primer != num1 && second == num2 && third == num3 && fourth != num4) ||
    (primer != num1 && second == num2 && third != num3 && fourth == num4) ||
    (primer != num1 && second != num2 && third == num3 && fourth == num4) &&

    ((primer != num1 && second != num2 && third != num3 && fourth != num4 && (primer == num2 || primer == num3 || primer == num4)) ||
      (primer != num1 && second != num2 && third != num3 && fourth != num4 && (second == num1 || second == num3 || second == num4)) ||
      (primer != num1 && second != num2 && third != num3 && fourth != num4 && (third == num1 || third == num2 || third == num4)) ||
      (primer != num1 && second != num2 && third != num3 && fourth != num4 && (fourth == num1 || fourth == num2 || fourth == num3)))

  ) {
    return "Two well located + One well";

    // One well located + Three well//
  } else if (
    ((primer == num1 && second != num2 && third != num3 && fourth != num4) ||
      (primer != num1 && second == num2 && third != num3 && fourth != num4) ||
      (primer != num1 && second != num2 && third == num3 && fourth != num4) ||
      (primer != num1 && second != num2 && third != num3 && fourth == num4)) &&

    (((primer == num2 || primer == num3 || primer == num4) &&
      (second == num1 || second == num3 || second == num4) &&
      (third == num1 || third == num2 || third == num4) &&
      (fourth != num1 || fourth != num2 || fourth != num3)) ||

    ((primer == num2 || primer == num3 || primer == num4) &&
      (second == num1 || second == num3 || second == num4) &&
      (third != num1 || third != num2 || third != num4) &&
      (fourth == num1 || fourth == num2 || fourth == num3)) ||

    ((primer == num2 || primer == num3 || primer == num4) &&
      (second != num1 || second != num3 || second != num4) &&
      (third == num1 || third == num2 || third == num4) &&
      (fourth == num1 || fourth == num2 || fourth == num3)) ||

    ((primer != num2 || primer != num3 || primer != num4) &&
      (second == num1 || second == num3 || second == num4) &&
      (third == num1 || third == num2 || third == num4) &&
      (fourth == num1 || fourth == num2 || fourth == num3)))
  ) {
    return "One well located + Three well";

    // One well located + Two well//
  } else if (

    ((primer == num1 && second != num2 && third != num3 && fourth != num4) ||
    (primer != num1 && second == num2 && third != num3 && fourth != num4) ||
    (primer != num1 && second != num2 && third == num3 && fourth != num4) ||
    (primer != num1 && second != num2 && third != num3 && fourth == num4)) &&

    (((primer == num2 || primer == num3 || primer == num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third != num1 || third != num2 || third != num4) && // 1° & 2°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer == num2 || primer == num3 || primer == num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third == num1 || third == num2 || third == num4) && // 1° & 3°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer == num2 || primer == num3 || primer == num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third != num1 || third != num2 || third != num4) && // 1° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)) ||


      ((primer != num2 || primer != num3 || primer != num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third == num1 || third == num2 || third == num4) && // 2° & 3°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer != num2 || primer != num3 || primer != num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third != num1 || third != num2 || third != num4) && // 2° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)) ||


      ((primer != num2 || primer != num3 || primer != num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third == num1 || third == num2 || third == num4) && // 3° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)))

  ) {
    return "One well located + Two well";


    // One well located + One well//
  } else if (
    (primer == num1 && second != num2 && third != num3 && fourth != num4 && (second == num3 || second == num4)) ||
    (primer == num1 && second != num2 && third != num3 && fourth != num4 && (third == num2 || third == num4)) ||
    (primer == num1 && second != num2 && third != num3 && fourth != num4 && (fourth == num2 || fourth == num3)) ||
    (primer != num1 && second == num2 && third != num3 && fourth != num4 && (primer == num3 || primer == num4)) ||
    (primer != num1 && second == num2 && third != num3 && fourth != num4 && (third == num1 || third == num4)) ||
    (primer != num1 && second == num2 && third != num3 && fourth != num4 && (fourth == num1 || fourth == num3)) ||
    (primer != num1 && second != num2 && third == num3 && fourth != num4 && (primer == num2 || primer == num4)) ||
    (primer != num1 && second != num2 && third == num3 && fourth != num4 && (second == num1 || second == num4)) ||
    (primer != num1 && second != num2 && third == num3 && fourth != num4 && (fourth == num1 || fourth == num2)) ||
    (primer != num1 && second != num2 && third != num3 && fourth == num4 && (primer == num2 || primer == num3)) ||
    (primer != num1 && second != num2 && third != num3 && fourth == num4 && (second == num1 || second == num3)) ||
    (primer != num1 && second != num2 && third != num3 && fourth == num4 && (third == num1 || third == num2))
  ) {
    return "One well located & One well";

    // One well located //
  } else if (
    (primer == num1 && second != num2 && third != num3 && fourth != num4) ||
    (primer != num1 && second == num2 && third != num3 && fourth != num4) ||
    (primer != num1 && second != num2 && third == num3 && fourth != num4) ||
    (primer != num1 && second != num2 && third != num3 && fourth == num4)
  ) {
    return "One well located";

    // Two well located //
  } else if (
    (primer == num1 && second == num2 && third != num3 && fourth != num4) ||
    (primer == num1 && second != num2 && third == num3 && fourth != num4) ||
    (primer == num1 && second != num2 && third != num3 && fourth == num4) ||
    (primer != num1 && second == num2 && third == num3 && fourth != num4) ||
    (primer != num1 && second == num2 && third != num3 && fourth == num4) ||
    (primer != num1 && second != num2 && third == num3 && fourth == num4)
  ) {
    return "Two well located";

    // Three well located //
  } else if (
    (primer == num1 && second == num2 && third == num3 && fourth != num4) ||
    (primer == num1 && second == num2 && third != num3 && fourth == num4) ||
    (primer == num1 && second != num2 && third == num3 && fourth == num4) ||
    (primer != num1 && second == num2 && third == num3 && fourth == num4)
  ) {
    return "Three well located";


    // Four well //
  } else if (
    (primer != num1 && second != num2 && third != num3 && fourth != num4) &&
    (primer == num2 || primer == num3 || primer == num4) &&
    (second == num1 || second == num3 || second == num4) &&
    (third == num1 || third == num2 || third == num4) &&
    (fourth == num1 || fourth == num2 || fourth == num3)
  ) {
    return "Four well";

    // Three well //
  } else if (
    (primer != num1 && second != num2 && third != num3 && fourth != num4) &&

    ((primer == num2 || primer == num3 || primer == num4) &&
      (second == num1 || second == num3 || second == num4) &&
      (third == num1 || third == num2 || third == num4) &&
      (fourth != num1 || fourth != num2 || fourth != num3)) ||

    ((primer == num2 || primer == num3 || primer == num4) &&
      (second == num1 || second == num3 || second == num4) &&
      (third != num1 || third != num2 || third != num4) &&
      (fourth == num1 || fourth == num2 || fourth == num3)) ||

    ((primer == num2 || primer == num3 || primer == num4) &&
      (second != num1 || second != num3 || second != num4) &&
      (third == num1 || third == num2 || third == num4) &&
      (fourth == num1 || fourth == num2 || fourth == num3)) ||

    ((primer != num2 || primer != num3 || primer != num4) &&
      (second == num1 || second == num3 || second == num4) &&
      (third == num1 || third == num2 || third == num4) &&
      (fourth == num1 || fourth == num2 || fourth == num3))
  ) {
    return "Three well";

    // Two well //
  } else if (
    (primer != num1 && second != num2 && third != num3 && fourth != num4) &&

    (((primer == num2 || primer == num3 || primer == num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third != num1 || third != num2 || third != num4) && // 1° & 2°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer == num2 || primer == num3 || primer == num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third == num1 || third == num2 || third == num4) && // 1° & 3°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer == num2 || primer == num3 || primer == num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third != num1 || third != num2 || third != num4) && // 1° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3))) ||


    (((primer != num2 || primer != num3 || primer != num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third == num1 || third == num2 || third == num4) && // 2° & 3°
        (fourth != num1 || fourth != num2 || fourth != num3)) ||

      ((primer != num2 || primer != num3 || primer != num4) &&
        (second == num1 || second == num3 || second == num4) &&
        (third != num1 || third != num2 || third != num4) && // 2° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)) ||


      ((primer != num2 || primer != num3 || primer != num4) &&
        (second != num1 || second != num3 || second != num4) &&
        (third == num1 || third == num2 || third == num4) && // 3° & 4°
        (fourth == num1 || fourth == num2 || fourth == num3)))
  ) {
    return "Two well";

    // One well//
  } else if (
    (primer != num1 && second != num2 && third != num3 && fourth != num4 && (primer == num2 || primer == num3 || primer == num4)) ||
    (primer != num1 && second != num2 && third != num3 && fourth != num4 && (second == num1 || second == num3 || second == num4)) ||
    (primer != num1 && second != num2 && third != num3 && fourth != num4 && (third == num1 || third == num2 || third == num4)) ||
    (primer != num1 && second != num2 && third != num3 && fourth != num4 && (fourth == num1 || fourth == num2 || fourth == num3))
  ) {
    return "One well";

  } else
    return "Nothing 😞";
}



document.write("<h2 class='your-number'>" + gamePila() + "</h2>");


//Press Enter and Refresh the Page//
document.addEventListener('keyup', function(e){
  if(e.keyCode == 13)
    window.location.reload();
})
