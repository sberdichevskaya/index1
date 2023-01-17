let mounth = Math.floor(Math.random() * 12) + 1;
let season = '';
let yaer = Math.floor(Math.random() * (2022-1970+1)) + 1970;

//console.log(mounth);
//console.log(yaer);
if(mounth>=1 && mounth<=2 || mounth == 12)
{
    season = 'Зима';
}

if(mounth>=3 && mounth<=5)
{
    season = 'Весна';
}

if(mounth>=6 && mounth<=8)
{
    season = 'Лето';
}

if(mounth>=9 && mounth<=11)
{
    season = 'Осень';
}



if (yaer%4 == 0)
{
    alert((mounth) + '.' + (yaer) + ' - ' + (season) + ' високосного года');
} else {
    alert((mounth) + '.' + (yaer) + ' - ' + (season) + ' не высокосного года');
}