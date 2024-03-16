export function userHealth(user) {
  if (user.health > 50) {
    return 'healthy';
  } else if (user.health >= 15 && user.health <= 50) {
    return 'wounded';
  } else {
    return 'critical';
  }
}