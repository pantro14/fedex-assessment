export default class Page {
    public open (path: string) {
        return browser.url(`http://localhost:4200/${path}`)
    }
}
