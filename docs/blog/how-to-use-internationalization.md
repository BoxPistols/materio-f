# How to use internationalization in a page

Materio admin provides internationalization for navigation only. There might be a time when you might want to translate any text in a page. Here's how you can achieve that:

1. Make sure your have `@formatjs/intl-localematcher`, `@types/negotiator` (Typescript version only), and `negotiator` packages installed
2. It is important to have locale defined in your path. For eg. `en/apps/calendar` where `en` is a locale which refers to the English language
3. Create JSON files with language as their file names in locales depending on the languages you need. For example, we're using three languages English, French & Arabic

  ```json title="en.json"
  {
    "helloWorld": "Hello World",
    "text": {
      "paragraph": "This is a paragraph"
    },
    "navigation": {
      ...
    }
  }
  ```

  ```json title="fr.json"
  {
    "helloWorld": "Bonjour le monde",
    "text": {
      "paragraph": "C'est un paragraphe"
    },
    "navigation": {
      ...
    }
  }
  ```

  ```json title="ar.json"
  {
    "helloWorld": "مرحبا بالعالم",
    "text": {
      "paragraph": "هذه فقرة"
    },
    "navigation": {
      ...
    }
  }
  ```

4. Import `getDictionary` and type `{ locale }` in the page where you want to translate the content

  ```jsx
  import { getDictionary } from '@/utils/get-dictionary'
  import type { Locale } from '@configs/i18n'
  ```

5. You can now initialize the `getDictionary` and pass the locale as a parameter. This will return a promise which you can use to get the dictionary

  ```jsx
  // Type Imports
  import type { Locale } from '@configs/i18n'

  // Util Imports
  import { getDictionary } from '@/utils/get-dictionary'

  const Component = async ({ params }: { params: { lang: Locale } }) => {
    
    // getDictionary only called on the server side, calling it on the client side will throw an error
    const dictionary = await getDictionary(params.lang)

    return (
      <>
        <div>{dictionary.helloWorld}</div>
        <div>{dictionary['text'].paragraph}</div>
      </>
    )
  }

  export default Component
  ```

That's it! You can now translate any text in your page.
