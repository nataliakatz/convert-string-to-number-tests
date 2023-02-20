const convertStringToNumber = (stringValue) => {
    if(stringValue.length === 0 || typeof stringValue !== "string"){
        return "некорректный вызов функции"
    }
   
    const result = Number(stringValue)

    if(isNaN(result)) {
        return "некорректный вызов функции"
    }

    return  result;
}

describe ("Тестирование функции convertStringToNumber", ()=>{
    test("Преобразование данных типа строка содержащая целое число в данные типа число (smoke-тестирование)", ()=>{
        expect(convertStringToNumber("123")).toBe(123)
    })

    test("Преобразование данных типа строка содержащая число и другие символы в данные типа число (негативный кейс)", ()=>{
        expect(convertStringToNumber("7a.df6/543")).toBe("некорректный вызов функции")
    })
})
