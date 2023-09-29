const selectPlan = (planNumber) => {
    if (planNumber=== 'základní') {
    document.querySelector('#plan1').classList.add('plan--selected');
}
    else if (planNumber=== 'rozšířený') {
    document.querySelector('#plan2').classList.add('plan--selected');
}
    else {
    document.querySelector('#plan3').classList.add('plan--selected');
}
}

document.querySelector('#plan1').classList.remove('plan--selected');

const tarif= prompt('Jaký chcete tarif?').toLowerCase();
selectPlan(tarif)