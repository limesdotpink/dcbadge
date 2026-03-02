<h1 style="text-align: center">dcbadge</h1>

A customizable badge that shows your Discord account, a server invite, or a bot account.

<img width="1280" height="640" alt="dcbadge" src="https://github.com/user-attachments/assets/2b5f0a85-3b5d-4238-a7b3-7f2f3695e5b5" />

<table width="100%">
  <tr>
    <th width="500px"><a href="#user-account">User Account</a></th>
    <th width="500px"><a href="#server-invite">Server Invite</a></th>
    <th width="500px"><a href="#bot-account">Bot Account</a></th>
  </tr>
  <tr>
    <td align="center"><img src="https://dcbadge.limes.pink/api/shield/406125028065804289" alt="" /></td>
    <td align="center"><a target="_blank" href="https://discord.gg/zkspfFwqDg"><img src="https://dcbadge.limes.pink/api/server/zkspfFwqDg" alt="" /></a></td>
    <td align="center"><img src="https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true" alt="" /></td>
  </tr>
</table>

## Set up

### User Account&nbsp;&nbsp;&nbsp;![](https://dcbadge.limes.pink/api/shield/406125028065804289)

1. Join the [Discord server](https://discord.gg/zkspfFwqDg) (required, as that's where the bot gets your presence information from)
2. Your shield will become available at `https://dcbadge.limes.pink/api/shield/USERID`
   <br>(replace `USERID` with [your Discord user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))

To embed the shield in a Markdown file, do this:
<br>`![](https://dcbadge.limes.pink/api/shield/USERID)`

### Server Invite&nbsp;&nbsp;&nbsp;[![](https://dcbadge.limes.pink/api/server/zkspfFwqDg)](https://discord.gg/zkspfFwqDg)

1. Create an invite for your server; make sure to set it to never expire!
2. Your shield will become available at `https://dcbadge.limes.pink/api/server/INVITE`<br>(e.g. `https://dcbadge.limes.pink/api/server/https://discord.gg/zkspfFwqDg`)

To embed the shield in a Markdown file, do this:
<br>`[![](https://dcbadge.limes.pink/api/server/INVITE)](https://discord.gg/INVITE)`

### Bot Account&nbsp;&nbsp;&nbsp;![](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)

1. DM me (![](https://dcbadge.limes.pink/api/shield/406125028065804289?style=flat&compact=true)) your bot's invite link
2. Wait for me to read the DM (it might take some time as it's a manual process)
3. Your shield will become available at `https://dcbadge.limes.pink/api/shield/BOTID?bot=true`
   <br>(replace `BOTID` with [your Discord bot's user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))

To embed the shield in a Markdown file, do this:
<br>`![](https://dcbadge.limes.pink/api/shield/BOTID?bot=true)`

## Styling

You can chain parameters by connecting them with `&` (e.g. `?style=flat&theme=clean&compact=true`).

### `style`

This uses [shields.io](https://shields.io) under the hood, so you can just use one of the styles from there via the `?style=` param.

| Badge                                                                                               | Style         | Query                |
| :-------------------------------------------------------------------------------------------------- | :------------ | :------------------- |
| ![flat](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&style=flat)               | flat          | `?style=flat`        |
| ![flat-square](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&style=flat-square) | flat-square   | `?style=flat-square` |
| ![for-the-badge (default)](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)       | for-the-badge | None (default)       |
| ![plastic](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&style=plastic)         | plastic       | `?style=plastic`     |
| ![social](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&style=social)           | social        | `?style=social`      |

### `theme`

You can also use the `theme` query option to change the colors of the shield (the green in the following badges corresponds to the online/idle/dnd/offline status)

| Badge                                                                                                         | Theme            | Query                     |
| :------------------------------------------------------------------------------------------------------------ | :--------------- | :------------------------ |
| ![default](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true)                                 | Default          | None (default)            |
| ![default-inverted](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=default-inverted) | Default inverted | `?theme=default-inverted` |
| ![clean](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=clean)                       | Clean            | `?theme=clean`            |
| ![clean-inverted](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=clean-inverted)     | Clean inverted   | `?theme=clean-inverted`   |
| ![dc](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=discord)                        | Discord          | `?theme=discord`          |
| ![dc-inverted](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=discord-inverted)      | Discord inverted | `?theme=discord-inverted` |
| ![full-presence](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=full-presence)       | Full presence    | `?theme=full-presence`    |
| ![grey](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=gray)                         | Gray             | `?theme=gray`             |
| ![blurple](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&theme=blurple)                   | Blurple          | `?theme=blurple`          |

Note: the `theme` option will not work with the social `style`.

### `compact`

Makes the badge more compact, at the expense of the status text/member count.

| Badge                                                                                      | Query           |
| :----------------------------------------------------------------------------------------- | :-------------- |
| ![compact](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&compact=true) | `?compact=true` |

### `logoColor`

You can pass a color for the logo (the examples below use `&theme=default-inverted` to make the change more evident)

| Badge                                                                                                                    | Query                 | Description                                             |
| :----------------------------------------------------------------------------------------------------------------------- | :-------------------- | :------------------------------------------------------ |
| ![presence](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&logoColor=presence&theme=default-inverted) | `?logoColor=presence` | Changes the color of the logo according to the presence |
| ![word](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&logoColor=pink&theme=default-inverted)         | `?logoColor=pink`     | Supported colors [here](https://shields.io/#colors)     |
| ![hex](https://dcbadge.limes.pink/api/shield/852977967776399400?bot=true&logoColor=ff6b6b&theme=default-inverted)        | `?logoColor=ff6b6b`   | Any hex code, without the `#`                           |

## I've added this to my GitHub bio and it doesn't work!

This **won't** work in bios, only in profile readmes (and any other part of GitHub that supports markdown).
[Here](https://mansik16.medium.com/adding-a-readme-to-your-github-profile-2ec88bfedeb)'s some info on what a profile readme is and how to set it up.

For any questions feel free to contact me on Discord (![](https://dcbadge.limes.pink/api/shield/406125028065804289?style=flat&compact=true)) or via email ([mdbadge@limes.pink](mailto:mdbadge@limes.pink))

## HTML

The API returns an SVG image, so you can embed it in your html just like you would with any other image:

```html
<img
  src="https://dcbadge.limes.pink/api/shield/USERID"
  alt="write a description depending on your usage"
/>
```

<br>
<br>
<p align="right">made with ❤ by <a href="https://limes.pink" target="_blank">limes.pink</a></p>
