import { chromium, ChromiumBrowser, Page } from "playwright";
import expect from "expect";

let browser: ChromiumBrowser;
let page: Page;
beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

describe("CRUD an article", () => {
  const title1 = "Hello, Title!";
  const body1 = "Hello, Body!";
  test("create an article", async () => {
    await page.goto("http://localhost:3000/");
    await Promise.all([
      page.waitForNavigation(),
      page.click("data-test-id=newArticleBtn"),
    ]);
    await page.fill("#title", title1);
    await page.fill("#body", body1);
    await Promise.all([
      page.waitForNavigation(),
      page.click("data-test-id=submitBtn"),
    ]);

    expect(await page.waitForSelector(`text=${title1}`)).not.toBeNull();
    expect(await page.waitForSelector(`text=${body1}`)).not.toBeNull();
  });

  test("read the article", async () => {
    await page.goto("http://localhost:3000/");
    await Promise.all([page.waitForNavigation(), page.click(`text=${title1}`)]);

    expect(await page.waitForSelector(`text=${title1}`)).not.toBeNull();
    expect(await page.waitForSelector(`text=${body1}`)).not.toBeNull();
  });

  const title2 = "안녕, 제목!";
  const body2 = "안녕, 본문!";
  test("update the article", async () => {
    await page.goto(`http://localhost:3000/${title1}`);
    await Promise.all([
      page.waitForNavigation(),
      page.click("data-test-id=editArticleBtn"),
    ]);
    await page.fill("#title", title2);
    await page.fill("#body", body2);
    await Promise.all([
      page.waitForNavigation(),
      page.click("data-test-id=submitBtn"),
    ]);

    expect(await page.waitForSelector(`text=${title2}`)).not.toBeNull();
    expect(await page.waitForSelector(`text=${body2}`)).not.toBeNull();
  });

  test("delete the article", async () => {
    await page.goto(`http://localhost:3000/${title2}`);
    await Promise.all([
      page.waitForNavigation(),
      page.click("data-test-id=deleteArticleBtn"),
    ]);

    expect(await page.$(`text=${title2}`)).toBeNull();
    expect(await page.$(`text=${body2}`)).toBeNull();
  });
});
