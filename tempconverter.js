function celsiusToFahrenheit(celsius) {
  const f = (celsius * 1.8) + 32
  console.log(celsius + " Celsius = " + f + " Fahrenheit")

  if (f > 122) {
    console.log("The temperature is extremely hot!")
  }
  else if (f > 86) {
    console.log("The temperature is hot!")
  }
}

function fahrenheitToCelsius(fahrenheit) {
  const c = (fahrenheit - 32) * 0.5556
  console.log(fahrenheit + " Fahrenheit = " + c + " Celsius")

  if (c > 50) {
    console.log("The temperature is extremely hot!")
  }
  else if (c > 30) {
    console.log("The temperature is hot!")
  }
}

celsiusToFahrenheit(49)

fahrenheitToCelsius(130)
