// Generated by Selenium IDE
const assert = require('assert')
const {Builder,until,By} = require("selenium-webdriver");
const chromeDriver = require("selenium-webdriver/chrome");

//npx mocha --parallel InitTest.js
describe('InitTest', function () {
  this.timeout(50000)
  let driver
  let vars
  const chromeOptions = new chromeDriver.Options();
  //chrome 브라우저 옵션
  // chromeOptions.addArguments("--headless");
  // chromeOptions.addArguments("--disable-gpu");
  // chromeOptions.addArguments("--no-sandbox");
  // beforeEach(async function() {
  before(async function() {
    driver = await new Builder().forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build()
    vars = {}
    await driver.get("http://todo.wooyu.world/")
    // await driver.get("http://localhost:8181/")
  })
  // afterEach(async function() {
  after(async function() {
    await driver.quit();
  })
  it('TC00000000', async function() {
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
  })
  it('TC00000001', async function() {
    await driver.findElement(By.id("searchTitle")).click()
    await driver.findElement(By.id("searchDate")).click()
    await driver.findElement(By.css(".searchIcon")).click()
  })
  it('TC00000002', async function() {
    //
    await driver.findElement(By.id("searchTitle")).click()
    {
      const attribute = await driver.findElement(By.id("searchTitle")).getAttribute("placeholder")
      vars["searchTitlePlaceholder"] = attribute
    }
    // // searchTitlePlaceholder 값 확인하기
    console.log("searchTitlePlaceholder 값 확인하기")
    console.log(`searchTitlePlaceholder: ${vars["searchTitlePlaceholder"]}`)
    assert(vars["searchTitlePlaceholder"].toString() == "내용을 입력하세요.")
  })
  it('TC00000003', async function() {

    {
      const value = await driver.findElement(By.id("searchDate")).getAttribute("value")
      assert(value == "")
    }
  })
  it('TC00000004', async function() {

    await driver.findElement(By.css(".bi-search-heart-fill")).click()
  })
  it('TC00000005', async function() {

    await driver.findElement(By.css(".bi-pencil-fill")).click()
    await driver.sleep(3000);
    await driver.findElement(By.css(".btn-close")).click()
    await driver.sleep(3000);
  })
  it('TC00000006', async function() {

      const elements = await driver.findElements(By.css(".card-body"))
      assert(!elements.length)
  })
  it('TC00000007', async function() {

    await driver.findElement(By.css(".bi-pencil-fill")).click()
    // 모달 나타날때까지 기다림
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
    await driver.findElement(By.id("exampleModalLabel")).click()
    await driver.findElement(By.id("exampleModalLabel")).sendKeys("test title7")
    await driver.findElement(By.id("addDate")).click()
    await driver.findElement(By.id("addDate")).sendKeys("002024-03-04")
    await driver.findElement(By.id("modalSaveBtn")).click()

    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
    // await driver.findElement(By.css(".dropdown")).click()
    // await driver.findElement(By.css(".form-check")).click()
    const elements = await driver.findElements(By.css(".card-body"))
    assert(elements.length)

    await driver.sleep(3000);
    // // 삭제하기
    console.log("삭제하기")
    await driver.findElement(By.css(".bi-trash-fill")).click()
    assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
    await driver.switchTo().alert().accept()
    await driver.sleep(3000);
  })
  it('TC00000008', async function() {

    // await driver.sleep(5000);
    await driver.findElement(By.css(".bi-pencil-fill")).click()
    // 모달 나타날때까지 기다림
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
    await driver.findElement(By.id("exampleModalLabel")).click()
    await driver.findElement(By.id("exampleModalLabel")).sendKeys("test title8")
    await driver.findElement(By.id("addDate")).click()
    await driver.findElement(By.id("addDate")).sendKeys("002024-03-04")
    await driver.findElement(By.id("modalSaveBtn")).click()
    //
    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
    // await driver.sleep(5000);
    assert(await driver.findElement(By.css(".dropdown-toggle")).getText() == "대기중")
    await driver.sleep(3000);
    // // 삭제하기
    console.log("삭제하기")
    await driver.findElement(By.name("deleteBtn")).click()
    assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
    await driver.switchTo().alert().accept()
    await driver.sleep(3000);
  })


  it('TC00000009', async function() {

    await driver.findElement(By.css(".bi-pencil-fill")).click()
    // 모달 나타날때까지 기다림
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
    await driver.findElement(By.id("exampleModalLabel")).click()
    await driver.findElement(By.id("exampleModalLabel")).sendKeys("test title9")
    await driver.findElement(By.id("addDate")).click()
    await driver.findElement(By.id("addDate")).sendKeys("002024-03-04")
    await driver.findElement(By.id("modalSaveBtn")).click()
    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
    await driver.findElement(By.css(".dropdown-toggle")).click()
    await driver.findElement(By.linkText("진행중")).click()
    await driver.sleep(3000);
    assert(await driver.findElement(By.css(".dropdown-toggle")).getText() == "진행중")
    await driver.sleep(3000);
    // // 삭제하기
    console.log("삭제하기")
    await driver.findElement(By.name("deleteBtn")).click()
    assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
    await driver.switchTo().alert().accept()
    await driver.sleep(3000);
  })
  it('TC00000010', async function() {

    await driver.findElement(By.css(".bi-pencil-fill")).click()
    // 모달 나타날때까지 기다림
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
    await driver.findElement(By.id("exampleModalLabel")).click()
    await driver.findElement(By.id("exampleModalLabel")).sendKeys("test title10")
    await driver.findElement(By.id("addDate")).click()
    await driver.findElement(By.id("addDate")).sendKeys("002024-03-04")
    await driver.findElement(By.id("modalSaveBtn")).click()
    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
    // // statusbtn 클릭
    console.log("statusbtn 클릭")
    await driver.findElement(By.css(".dropdown-toggle")).click()
    await driver.findElement(By.linkText("완료")).click()
    await driver.sleep(3000);
    assert(await driver.findElement(By.css(".dropdown-toggle")).getText() == "완료")
    await driver.sleep(3000);
    // // 삭제하기
    console.log("삭제하기")
    await driver.findElement(By.name("deleteBtn")).click()
    assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
    await driver.switchTo().alert().accept()
    await driver.sleep(3000);
  })
  it('TC00000011', async function() {

    await driver.findElement(By.css(".bi-pencil-fill")).click()
    // 모달 나타날때까지 기다림
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
    await driver.findElement(By.id("exampleModalLabel")).click()
    await driver.findElement(By.id("exampleModalLabel")).sendKeys("test title11")
    await driver.findElement(By.id("addDate")).click()
    await driver.findElement(By.id("addDate")).sendKeys("002024-03-04")
    await driver.sleep(2000);
    await driver.findElement(By.id("modalSaveBtn")).click()
    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)

    const elements = await driver.findElements(By.css(".card-body"))
    assert(elements.length)

    await driver.sleep(3000);
    assert(await driver.findElement(By.css("span:nth-child(3)")).getText() == "test title11")
    await driver.sleep(3000);
    // // 삭제하기
    console.log("삭제하기")
    await driver.findElement(By.css(".card:nth-child(1) .btn-danger > .bi")).click()
    assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
    await driver.switchTo().alert().accept()
    await driver.sleep(3000);
  })
  it('TC00000012', async function() {

    await driver.findElement(By.css(".bi-pencil-fill")).click()
    // 모달 나타날때까지 기다림
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
    await driver.findElement(By.id("exampleModalLabel")).click()
    await driver.findElement(By.id("exampleModalLabel")).sendKeys("test title12")
    await driver.findElement(By.id("addDate")).click()
    await driver.findElement(By.id("addDate")).sendKeys("002024-03-04")
    await driver.findElement(By.id("modalSaveBtn")).click()
    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)

    const elements = await driver.findElements(By.css(".card-body"))
    assert(elements.length)
    await driver.sleep(3000);
    // // 수정 버튼 클릭
    console.log("수정 버튼 클릭")
    await driver.findElement(By.css(".card:nth-child(1) .btn-primary")).click()
    await driver.sleep(3000);
    await driver.findElement(By.css(".btn-close")).click()

    // // 삭제하기
    await driver.sleep(3000);
    console.log("삭제하기")
    await driver.findElement(By.css(".card:nth-child(1) .btn-danger > .bi")).click()
    assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
    await driver.switchTo().alert().accept()
  })
  it('TC00000013', async function() {

    await driver.findElement(By.css(".bi-pencil-fill")).click()
    // 모달 나타날때까지 기다림
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
    await driver.findElement(By.id("exampleModalLabel")).click()
    await driver.findElement(By.id("exampleModalLabel")).sendKeys("test title13")
    await driver.findElement(By.id("addDate")).click()
    await driver.findElement(By.id("addDate")).sendKeys("002024-03-04")
    await driver.findElement(By.id("modalSaveBtn")).click()
    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)

    const elements = await driver.findElements(By.css(".card-body"))
    assert(elements.length)

    await driver.sleep(3000);
    // // 삭제하기
    console.log("삭제하기")
    await driver.findElement(By.css(".card:nth-child(1) .btn-danger > .bi")).click()
    assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
    await driver.switchTo().alert().accept()
  })
  it('TC00000014', async function() {

    vars["check"] = await driver.executeScript("return 1")
    const timesCreate = 7
    for(let i = 0; i < timesCreate; i++) {
      await driver.navigate().refresh();
      await driver.sleep(3000);
      await driver.findElement(By.css(".bi-pencil-fill")).click()
      await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
      await driver.findElement(By.id("exampleModalLabel")).click()
      await driver.findElement(By.id("exampleModalLabel")).sendKeys("loop title" + vars["check"])
      await driver.findElement(By.id("addDate")).click()
      await driver.findElement(By.id("addDate")).sendKeys("002024-03-09")
      await driver.findElement(By.id("modalSaveBtn")).click()
      await driver.sleep(3000);
      vars["check"] = await driver.executeScript("return arguments[0] + 1", vars["check"])
    }

    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
    {
      const elements = await driver.findElements(By.css(".card-body"))
      assert(elements.length)
    }

    await driver.navigate().refresh();
    await driver.sleep(2000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
    const elements = await driver.findElements(By.css(".card-body"))
    assert(elements.length)
    await driver.sleep(2000);

    // // scroll 유무 확인하는 command를 IDE 미지원하여 mocha.js로 작성
    const scrollDiv = await driver.findElement(By.id('scrollDiv'));

    // 스크롤바의 존재 여부를 확인하고 결과를 반환합니다.
    const isScrollbarHidden = await driver.executeScript(
        'return arguments[0].scrollHeight === arguments[0].clientHeight',
        scrollDiv
    );

    // 결과를 출력하거나 테스트 프레임워크에 통과/실패를 전달합니다.
    if (isScrollbarHidden) {
      console.log('스크롤바가 미존재합니다. 테스트 통과!');
    } else {
      console.error('스크롤바가 존재합니다. 테스트 실패!');
      assert.fail('스크롤바가 존재합니다.');
    }

    console.log("scroll 유무 확인하는 command를 IDE 미지원하여 mocha.js로 작성")


    // // 삭제하기
    vars["check"] = await driver.executeScript("return 1")
    const timesDelete = 7
    for(let i = 0; i < timesDelete; i++) {
      await driver.findElement(By.name("deleteBtn")).click()
      assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
      await driver.switchTo().alert().accept()
    }


  })
  it('TC00000015', async function() {

    vars["check"] = await driver.executeScript("return 1")
    const timesCreate = 8
    for(let i = 0; i < timesCreate; i++) {
      await driver.navigate().refresh();
      await driver.sleep(3000);
      await driver.findElement(By.css(".bi-pencil-fill")).click()
      // 모달 나타날때까지 기다림
      await driver.wait(until.elementIsVisible(await driver.findElement(By.id("exampleModalLabel"))), 3000)
      await driver.findElement(By.id("exampleModalLabel")).click()
      await driver.findElement(By.id("exampleModalLabel")).sendKeys("loop title" + vars["check"])
      await driver.findElement(By.id("addDate")).click()
      await driver.findElement(By.id("addDate")).sendKeys("002024-03-09")
      await driver.findElement(By.id("modalSaveBtn")).click()
      vars["check"] = await driver.executeScript("return arguments[0] + 1", vars["check"])
    }

    await driver.navigate().refresh();
    await driver.sleep(3000);
    await driver.wait(until.elementTextIs(await driver.findElement(By.css(".title")), 'To do list'), 30000)
    const elements = await driver.findElements(By.css(".card-body"))
    assert(elements.length)

    // // scroll 유무 확인하는 command를 IDE 미지원하여 mocha.js로 작성
    const scrollDiv = await driver.findElement(By.id('scrollDiv'));

    // 스크롤바의 존재 여부를 확인하고 결과를 반환합니다.
    const isScrollbarHidden = await driver.executeScript(
        'return arguments[0].offsetHeight < arguments[0].scrollHeight',
        scrollDiv
    );

    // 결과를 출력하거나 테스트 프레임워크에 통과/실패를 전달합니다.
    if (isScrollbarHidden) {
      console.log('스크롤바가 존재합니다. 테스트 통과!');
    } else {
      console.error('스크롤바가 미존재합니다. 테스트 실패!');
      assert.fail('스크롤바가 미존재합니다.');
    }
    console.log("scroll 유무 확인하는 command를 IDE 미지원하여 mocha.js로 작성")


    // // 삭제
    vars["check"] = await driver.executeScript("return 1")
    const timesDelete = 8
    for(let i = 0; i < timesDelete; i++) {
      await driver.navigate().refresh();
      await driver.sleep(1000);
      await driver.findElement(By.name("deleteBtn")).click()
      assert(await driver.switchTo().alert().getText() == "삭제하시겠습니까?")
      await driver.switchTo().alert().accept()
    }
  })
})