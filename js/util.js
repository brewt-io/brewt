function utilization(gravity, minutes){
    return (1.65 * Math.pow(0.000125, (gravity - 1))) * (1 - Math.exp(-0.04 * minutes) ) / 4.14;
}
