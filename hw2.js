//קוד המדפיס את כל המספרים הראשוניים שערכם קטן מהמספר 237

//פונקציה לבדיקה האם המספר הוא ראשוני
function isprime(num)
{
  if (num<=1)
    return false;//1 לא ראשוני
  for( let i=2 ; i<Math.sqrt(num); i ++)
  {
    if (num % i === 0) return false; // אם המספר מתחלק ב-i, הוא לא ראשוני
  }
  return true;
}

// הדפסת כל המספרים הראשוניים הקטנים מ-237
for( let i=2 ; i<237; i++)
{
  if(isprime(i))
  {
    console.log(i);//הדפסת המספר הראשוני
  }
}