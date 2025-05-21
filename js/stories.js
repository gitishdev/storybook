const stories = [
  {
    id: 0,
    title: "The Honest Woodcutter",
    image: "Woodcutter04.jpg", // <- This is the image filename
    pages: [
      "Once upon a time, a woodcutter was cutting wood by the river.",
      "Suddenly, his axe slipped and fell into the water.",
      "An angel appeared and offered him a golden axe.",
      "The woodcutter refused, saying it wasn't his.",
      "The angel rewarded his honesty with all three axes."
    ],
    moral: "Honesty is the best policy."
  },

  {
    id: 1,
    title: "Coco the Cloud",
    image: "Cloudinthesky02.jpg", 
    pages: [
      "Once upon a time, a little cloud named Coco floated high above the world.",
      "Coco loved watching children play, birds fly, and flowers bloom.",
      "One day, Coco saw a flower wilting in a dry field.",
      "Coco gave a little rain to help it grow, even though it meant shrinking.",
      "The flower bloomed, and Coco felt happy and light."
    ],
    moral: "Kindness may make you give a little, but it grows something beautiful in return."
  },
  {
    id: 2,
    title: "Benny the Brave Bunny",
    image: "Bunny.jpg", 
    pages: [
      "Benny the bunny was afraid of the dark forest near his home.",
      "One day, he heard a tiny voice crying for help from the woods.",
      "Even though he was scared, Benny hopped in to find a baby bird stuck in a bush.",
      "He gently freed the bird and led it back to safety.",
      "Benny realized he was braver than he thought."
    ],
    moral: "Courage means doing what's right, even when you're scared."
  },
  {
    id: 3,
    title: "Milo and the Moonlight",
    image: "MouseMoonlight02.jpg", 
    pages: [
      "Milo the mouse loved to dance in the moonlight every night.",
      "One evening, a cloud covered the moon, and Milo got sad.",
      "His forest friends brought lanterns to light up the clearing.",
      "Milo danced again, smiling at his glowing friends.",
      "The moon peeked out just in time to join the fun."
    ],
    moral: "Friends can light up your darkest nights."
  },
  {
    id: 4,
    title: "Tara the Turtle’s Race",
    pages: [
      "Tara the turtle was slow but loved to race.",
      "Other animals laughed and sped ahead of her.",
      "She kept going with a smile and steady steps.",
      "One by one, the others got tired and stopped.",
      "Tara finished the race with pride and cheers."
    ],
    moral: "Slow and steady really does win the race."
  },
  {
    id: 5,
    title: "Nino the Little Night Owl",
    pages: [
      "Nino the owl couldn't sleep at night and wished he was like other birds.",
      "He flew through the night, feeling lonely.",
      "Then he saw stars twinkling and animals playing in the moonlight.",
      "He joined in and discovered a new world at night.",
      "Nino was proud to be a night owl."
    ],
    moral: "Being different makes you special in your own way."
  },
  {
    id: 6,
    title: "Lulu’s Lost Leaf",
    pages: [
      "Lulu the ladybug lost her favorite golden leaf in the wind.",
      "She searched the meadow and asked each friend she met.",
      "No one had it, but each offered her a kind smile and a snack.",
      "At the end of the day, a breeze brought her leaf back.",
      "Lulu hugged it, thankful for both her leaf and her friends."
    ],
    moral: "When things feel lost, kindness helps you find more than you knew you needed."
  },
  {
    id: 7,
    title: "Pip and the Pebble",
    pages: [
      "Pip the penguin found a shiny pebble on the beach.",
      "He wanted to keep it but saw another penguin shivering nearby.",
      "He gave the pebble to help fix the friend’s broken nest.",
      "The penguin smiled and invited Pip to live with them.",
      "Together, they built the coziest igloo on the shore."
    ],
    moral: "Sharing brings warmth and friendship."
  },
  {
    id: 8,
    title: "Gracie the Giggling Giraffe",
    pages: [
      "Gracie was the tallest giraffe in the savannah and very ticklish.",
      "Other animals teased her, calling her goofy.",
      "One day, her giggle echoed through the trees and scared away a lion!",
      "Everyone cheered and thanked her for her funny, fearless giggle.",
      "Gracie giggled even more, now proud of her uniqueness."
    ],
    moral: "What makes you different may be your greatest strength."
  },
  {
    id: 9,
    title: "Daisy and the Dandelion",
    pages: [
      "Daisy the deer found a tiny dandelion growing in the middle of the path.",
      "She asked the other animals not to step on it.",
      "They grumbled, but Daisy gently guarded it for days.",
      "Soon the dandelion grew and released its fluffy seeds across the meadow.",
      "Everyone admired the new flowers blooming thanks to Daisy’s care."
    ],
    moral: "Protecting the small can lead to something big and beautiful."
  },
  {
    id: 10,
    title: "Leo the Little Lion’s Roar",
    pages: [
      "Leo the lion cub couldn’t roar like the others.",
      "He practiced and practiced, but only squeaks came out.",
      "One day, he heard a scared animal calling for help.",
      "Leo roared his loudest and bravest to chase away danger.",
      "It wasn’t the loudest, but it was full of heart—and that was enough."
    ],
    moral: "It's not how big your voice is, but how you use it that matters."
  },

  // ... previous 10 stories ...

  {
    id: 11,
    title: "Sunny the Snail",
    pages: [
      "Sunny the snail was small but loved to explore.",
      "He slowly traveled across the garden, enjoying each leaf.",
      "One day, he saw a big bird flying high and wished he could fly too.",
      "But Sunny realized he could enjoy the journey, no matter how slow.",
      "And soon, he made many new friends along the way."
    ],
    moral: "It's not how fast you go, but how you enjoy the journey."
  },
  {
    id: 12,
    title: "Milo the Little Mole",
    pages: [
      "Milo the mole lived underground and never saw the sun.",
      "He was curious about the world above, so he decided to dig up.",
      "When he popped out of the ground, he was amazed by the flowers and the sky!",
      "Milo realized that sometimes, trying something new brings beautiful surprises.",
      "From that day, he made sure to enjoy both the underground and the outside world."
    ],
    moral: "Sometimes, new experiences bring wonderful surprises."
  },
  {
    id: 13,
    title: "Penny the Penguin's Ice Slide",
    pages: [
      "Penny the penguin loved sliding on the ice.",
      "One day, she saw a small penguin who couldn’t slide.",
      "Penny showed him how to glide smoothly, and they slid together.",
      "They laughed and had so much fun, sliding all day long.",
      "Penny learned that sharing fun with others makes it even better."
    ],
    moral: "Sharing joy makes it grow even bigger."
  },
  {
    id: 14,
    title: "Lenny the Little Lion",
    pages: [
      "Lenny the lion was the smallest in his pride.",
      "He wanted to roar like the grown-up lions, but his roar was soft.",
      "One day, he saw a tiger in the distance, and everyone was scared.",
      "Lenny gave his loudest, bravest roar, and the tiger ran away!",
      "Lenny showed that even the softest roar can make a difference."
    ],
    moral: "It’s not how loud you are, but how brave you are that matters."
  },
  {
    id: 15,
    title: "Tilly the Tiny Tiger",
    pages: [
      "Tilly was a tiny tiger who couldn’t jump as high as the others.",
      "She practiced every day, trying to jump higher and higher.",
      "One day, she leaped the highest she ever could, and everyone cheered!",
      "Tilly learned that with practice and patience, she could achieve anything."
    ],
    moral: "With patience and practice, you can achieve great things."
  },
  {
    id: 16,
    title: "Bella the Butterfly",
    pages: [
      "Bella was a caterpillar who dreamed of becoming a butterfly.",
      "She didn’t like waiting, but she knew it was part of her journey.",
      "Finally, after a long wait, Bella spread her wings and flew beautifully.",
      "Bella realized that sometimes, good things take time to happen."
    ],
    moral: "Patience helps beautiful things grow."
  },
  {
    id: 17,
    title: "Charlie the Chipmunk's Stash",
    pages: [
      "Charlie the chipmunk loved collecting acorns.",
      "He gathered as many as he could and hid them in his secret stash.",
      "But one winter, he found that he had more than he could eat.",
      "Charlie shared his acorns with the other animals, and everyone was happy.",
      "He learned that sharing brings more joy than keeping everything to yourself."
    ],
    moral: "Sharing is what makes everything sweeter."
  },
  {
    id: 18,
    title: "Ella the Elephant’s Gentle Touch",
    pages: [
      "Ella the elephant had a very strong trunk.",
      "One day, she accidentally knocked over a tree with it.",
      "She felt sad and learned to use her trunk more carefully.",
      "From then on, Ella helped others gently with her strength."
    ],
    moral: "Using strength gently is an important skill."
  },
  {
    id: 19,
    title: "Mimi the Magical Moonbeam",
    pages: [
      "Mimi the little moonbeam loved to play with the stars.",
      "One evening, she noticed a sad cloud blocking the stars.",
      "Mimi decided to shine brightly, lighting up the cloud and making it go away.",
      "The stars twinkled again, and Mimi felt proud to help them shine."
    ],
    moral: "Even a little light can make a big difference."
  },
  {
    id: 20,
    title: "Finn the Friendly Fox",
    pages: [
      "Finn the fox loved to play with his friends in the forest.",
      "One day, he found a bird with a hurt wing.",
      "Finn gently carried the bird to a safe place and cared for it.",
      "The bird recovered and flew away, thanking Finn for his kindness."
    ],
    moral: "Being kind to others makes the world a happier place."
  }
];
