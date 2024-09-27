class Vehicle {

    constructor(pmake, pmodel, pyear) {

        this.make = pmake
        this.model = pmodel
        this.year = pyear

    }

    getDetails() {
        return `This is a ${this.make} model ${this.model} manufactured in ${this.year}`
    }

}

function vehicleDetails(){
    event.preventDefault()

    let make = inputMake.value
    let model = inputModel.value
    let year = inputYear.value

    let veh1 = new Vehicle(make, model, year)
    vehDetails.innerHTML= veh1.getDetails()

}