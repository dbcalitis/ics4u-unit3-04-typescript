/**
 * The program solves the Tower of Hanoi
 *
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-11-16
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * The hanoi function
 *
 * @param {number} ndisks the number of disks.
 * @param {number} startPeg the starting peg.
 * @param {number} endPeg the ending peg.
 */
function hanoi(ndisks: number, startPeg: number = 1, endPeg: number = 3): void {
  if (ndisks === 1) {
    console.log(`Move disk 1 from peg ${startPeg} to the peg ${endPeg}`)
  } else {
    hanoi(ndisks - 1, startPeg, 6 - startPeg - endPeg)
    console.log(`Move disk ${ndisks} from the peg ${startPeg} to peg ${endPeg}`)
    hanoi(ndisks - 1, 6 - startPeg - endPeg, endPeg)
  }
}

// Input
console.log('Towers of Hanoi program\n')
const numDisks = Number(
  prompt('How many disks would you like in your tower (1->): ')
)

// Process and Output
if (isNaN(numDisks)) {
  console.log('Invalid Input.')
} else {
  hanoi(numDisks)
}

console.log('\nDone.')
