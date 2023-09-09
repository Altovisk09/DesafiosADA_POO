class Imposto {
    consultarImposto(salario) {
      if (salario <= 1903.98) {
        return 0;
      } else if (salario <= 2826.65) {
        return 7.5;
      } else if (salario <= 3751.05) {
        return 15;
      } else if (salario <= 4664.68) {
        return 22.5;
      } else {
        return 27.5;
      }
    }
  }
  
  const imposto = new Imposto();
  console.log(imposto.consultarImposto(1900));     // 0
  console.log(imposto.consultarImposto(1903.99));  // 7.5
  