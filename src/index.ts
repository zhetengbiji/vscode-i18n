import * as fs from 'fs'
import * as path from 'path'
import * as osLocale from 'os-locale'

// 本地语言类
export class Locale {
    full: string
    primary: string

    constructor() {
        const VSCODE_NLS_CONFIG: string = process.env.VSCODE_NLS_CONFIG
        var language: string
        if(VSCODE_NLS_CONFIG) {
            let config: object = JSON.parse(VSCODE_NLS_CONFIG)
            language = config["locale"]
        } else {
            language = osLocale.sync()
        }
        var full: string = this.full = language.replace('_', '-').toLowerCase()
        this.primary = full.split('-')[0]
    }
    toString() {
        return this.full
    }
}
// 本地语言
export var locale: Locale = new Locale()

/**
 * 初始化
 * @param i18nDirPath i18n目录路径
 * @param defaultLanguage 默认语言
 */
export function Localize(i18nDirPath: string, defaultLanguage?: string) {
    if(!defaultLanguage) {
        defaultLanguage = 'en'
    }
    // 所有语言数据
    var i18nData: object = {}
    /**
     * 获取语言
     * @param language 语言类型
     */
    function getLanguageData(language: string): object {
        var data: object = i18nData[language]
        if(data) {
            return data
        }
        var str: string
        try {
            str = fs.readFileSync(path.join(i18nDirPath, `${language}.json`), {
                encoding: 'utf-8'
            })
        } catch(error) {

        }
        if(str) {
            try {
                data = JSON.parse(str)
            } catch(error) {
                data = {}
            }
        } else {
            data = {}
        }

        return i18nData[language] = data
    }

    /**
     * 返回本地化的字符串
     * @param key 查找的键
     */
    return function localize(key: string): string {
        return getLanguageData(locale.full)[key] || getLanguageData(locale.primary)[key] || getLanguageData(defaultLanguage)[key] || key
    }
}