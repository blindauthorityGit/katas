function zombie_shootout(zombies, range, ammo) {
  for (let i = 0; ; i++) {
    if (ammo > 0 && zombies > 0 && range > 0) {
      zombies--;
      range -= 0.5;
      ammo--;
      console.log(ammo, zombies, range);
    } else {
      break;
    }
  }
  console.log(ammo);
}

zombie_shootout(100, 8, 200);
