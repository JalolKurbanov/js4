var day = +prompt('Введите время');

switch(day){
    case 1:
        alert(day+' час ночи')
        break;
    case 2:
    case 3:
    case 4:
        alert(day+' часа ночи')
        break;
    case 0:
    case 5:
    case 6:
        alert(day+' часов ночи')
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert(day + ' часов утра')
        break;
    case 11:
    case 12:
        alert(day+' часов дня')
        break;
    case 13:
        alert((day-12)+' час дня')
        break;
    case 14:
    case 15:
    case 16:
        alert((day-12)+' часа дня')
        break;
    case 17:
        alert((day-12)+' часов дня')
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        alert((day-12)+' часов вечера')
}