<h3 align="center">
  League of Legends Loot Simulator
</h3>

<blockquote align="center">
  League of Legends Loot Simulator is an microsservice application that allows you to open chests, use the market and trade items with other users. It's based on the "Loot" feature inside the League of Legends game. This application is not related to the real League of Legends inventory or Riot Games itself.
</blockquote>
<br>

<p align="center">

<img alt="License status badge" src="https://img.shields.io/github/license/matheussartori/lol-loot-simulator?color=%2361dafb&style=flat-square" />

</p>

<p align="center">
  <a href="#services">Services</a><br>
</p>

## Services

This application is composed with multiple services. They were splitted into microservices not just to make it easier to maintain and to scale, but also because of learning purposes.

<table>
  <thead>
    <tr>
      <th>Service</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code><a href="./service-account/">service-account</a></code></td>
      <td>User registration, authentication and account data.</td>
    </tr>
    <tr>
      <td><code><a href="./service-catalog/">service-catalog</a></code></td>
      <td>Catalog of champions, skins, chromas, etc.</td>
    </tr>
    <tr>
      <td><code><a href="./service-inventory">service-inventory</a></code></td>
      <td>User inventories.</td>
    </tr>
    <tr>
      <td><code><a href="./service-loot">service-loot</a></code></td>
      <td>Loot storage, capsules opening.</td>
    </tr>
    <tr>
      <td><code><a href="./service-loot">service-loot</a></code></td>
      <td>Logs about the applications and kafka messages.</td>
    </tr>
    <tr>
      <td><code><a href="./service-store">service-store</a></code></td>
      <td>Store to buy champions and other items./</td>
    </tr>
  </tbody>
</table>