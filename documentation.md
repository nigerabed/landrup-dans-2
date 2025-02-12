# Heading 1
## Heading 2

dette er en linje med tekst....

dette er et ny linje

*dette er et punkt
- dette er et andet punkt

1. dette er et punkt i en ordet liste
2. dette er punk 2  
a. hej

[Klik her for at komme til Google](https://google.com)

![billede af en kat](https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x4.jpg)

[page.jsx](src/app/(main)/page.jsx)

Jeg har brugt `<Image/>` componentet er rigtig meget i min opgave

```js
const identifier = formData.get("identifier")
	const password = formData.get("password")

	const schema = z.object({
		identifier: z.string().min(1, { message: "Du skal udfylde en email" }).email({ message: "Ugyldig email" }),
		password: z.string().min(1, { message: "Du skal udfylde et password" })
	})

	const validate = schema.safeParse({
		identifier,
		password
	})

	if (!validate.success) {
		return {
			formData: {
				identifier,
				password
			},
			errors: validate.error.format()
		}
	}
```

| username | password |
| - | - |
| user1 |



# Dokumentation for Din Mægler

Brian Emilius, WU11

Jeg har vælgt at lægge min opgave på nettet. se den her:

[http://localhost:3001/](http://localhost:3001/)

Bruger til systimet:

| username | password |
| - | - |
|minnyebruger | 1234 |

## Tech-stack

* **Frontend**
HTML, CSS, JavaScript, React, nextJs, TailwindCSS.
* **Andre værktøjer**
VS Code, github.
* **NextJS**
Jeg har vælgt at bruge NextJS fordi,  

 - Lav både frontend og backend i samme projekt  
 - Ingen behov for ekstra routing – oprette bare en fil i pages/, og den bliver automatisk en side.
 - Next.js optimerer vores sider automatisk, så de loader hurtigt.
 - Hurtig udvikling med Fast Refresh, så vi ser ændringer med det samme.
 - Kan nemt hostes på Vercel, Netlify eller egen server.
 - kort sagt, Hurtigere, nemmere og bedre for SEO – perfekt til moderne webudvikling.
* [**TailwindCSS**](https:,//tailwindcss.com/)
- Ingen behov for at skrive lange CSS-filer – vi kan styler direkte i HTML med utility-klasser.
```js
- <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Klik mig</button>
```
- jeg troa det mindre kode og bedre struktur.
Jeg bruger TailwindCSS fordi ...
* [**React Icons**](https://react-icons.github.io)
- Hvis vi vil have en let og hurtig  at bruge ikoner på i React og NextJS projekter, så er React Icons det perfekte valg!
-  Nem installation
-  Stort udvalg af ikoner

## Kode-eksemple
Jeg har vælgt et eksample fra ...

Jeg bruger biblioteket `zod` til at lave et schema, så jeg kan valodere email 
