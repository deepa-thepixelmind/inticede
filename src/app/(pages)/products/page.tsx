import FabricsSection from './fabric';

const fabricSections = [
  {
    title: 'Fabrics',
    description:
      'From concept to creation, we provide all kinds of fabrics required for your production needs sourced with precision and reliability',
    fabrics: [
      { image: '/assets/product/fabric1.jpg', label: 'Lycra blend' },
      { image: '/assets/product/fabric2.jpg', label: 'Bamboo fabric' },
      { image: '/assets/product/fabric3.jpg', label: 'Polyamide fabric' },
      { image: '/assets/product/fabric4.jpg', label: 'Ivory Silk Duchess Satin' },
      { image: '/assets/product/fabric5.jpg', label: 'Italian Lyocell Cotton' },
      { image: '/assets/product/fabric6.jpg', label: 'Polyester Stretch Mesh' },
       { image: '/assets/product/fabric7.jpg', label: 'Cotton_Spandex Jersey' },
       { image: '/assets/product/fabric8.jpg', label: '3yards Solid DTY BRUSHED' },
       { image: '/assets/product/fabric9.jpg', label: 'Power Mesh Fabric by the Yard' },
    ],
  },
  {
    title: 'Trims and finishes',
    description: 'From detailing to durability, we offer a complete range of trims and finishes—sourced with care to enhance both function and aesthetics in every garment',
    fabrics: [
      { image: '/assets/product/trims1.jpg', label: 'Hook and eye' },
      { image: '/assets/product/trims2.png', label: 'Bows' },
      { image: '/assets/product/trims3.jpg', label: 'Ring sliders' },
       { image: '/assets/product/trims4.png', label: 'xyz' },
      { image: '/assets/product/trims5.jpg', label: 'Bow Pearl Underwear Straps ' },
      { image: '/assets/product/trims6.jpg', label: ' Fashion Webbing Bra Buckles' },
    ],
  },
  {
    title: 'Lingerie Accessories',
    description: 'Subtle yet essential, our lingerie accessories are carefully selected to enhance comfort, support, and confidence in every intimate piece',
    fabrics: [
      { image: '/assets/product/acc1.jpg', label: 'Stick on bras' },
      { image: '/assets/product/acc2.jpg', label: 'Nipple pasties' },
      { image: '/assets/product/acc3.png', label: 'Disposable bras' },
       { image: '/assets/product/acc4.jpg', label: 'Nudes' },
      { image: '/assets/product/acc5.png', label: 'abc' },
      { image: '/assets/product/acc6.jpg', label: ' Womens Underwear & Nightwear' },
    ],
  },
  {
    title: 'Menswear',
    description: 'Designed to move with you, our mens essentials combine fit, function, and a focus on all-day ease',
    fabrics: [
      { image: '/assets/product/mens1.jpg', label: 'Men’s Brief' },
      { image: '/assets/product/mens2.png', label: 'Mens vests' },
      { image: '/assets/product/mens3.jpg', label: 'Mens Boxers' },

    ],
  },

  {
    title: 'Intimate wear',
    description: 'From fabric to fit, our intimate wear can be custom-designed to align perfectly with your vision and requirements',
    fabrics: [
      { image: '/assets/product/inti1.jpg', label: 'Bras' },
      { image: '/assets/product/inti2.jpg', label: 'Panties' },
      { image: '/assets/product/inti3.jpg', label: 'Lingerie sets' },

    ],
  },

  {
    title: 'Loungewear',
    description: 'Whether you’re after laid-back luxury or functional comfort, our loungewear can be custom-crafted to reflect your exact vision',
    fabrics: [
      { image: '/assets/product/loungewear1.jpg', label: 'Nightwear sets' },
      { image: '/assets/product/loungewear2.jpg', label: 'Pajamas' },
      { image: '/assets/product/loungewear3.jpg', label: 'Polyamide fabric' },

    ],
  },

  {
    title: 'Shapewear',
    description: 'Designed to smooth, shape, and support, our shapewear can be custom-crafted to meet your specific fit, function, and fabric requirements.',
    fabrics: [
      { image: '/assets/product/shape1.png', label: 'Waist clinchers' },
      { image: '/assets/product/shape2.png', label: 'Bodysuits' },
      { image: '/assets/product/shape3.png', label: 'Panty shapers' },

    ],
  },

  {
    title: 'Athleisure wear',
    description: 'Our athleisure wear merges function with fashion, offering custom design options to suit your lifestyle and brand identity.',
    fabrics: [
      { image: '/assets/product/athle1.jpg', label: 'Sports sets' },
      { image: '/assets/product/athle2.jpg', label: 'Leggings/ Yoga pants' },
      { image: '/assets/product/athle3.jpg', label: 'Sportsbra' },

    ],
  },

  {
    title: 'Thermal wear ',
    description: 'Crafted to retain heat without bulk, our thermal wear is fully customizable to support your specific product vision and use-case demands',
    fabrics: [
      { image: '/assets/product/thermal1.jpg', label: 'Thermal leggings' },
      { image: '/assets/product/thermal2.jpg', label: 'Thermal vests' },
      { image: '/assets/product/thermal3.jpg', label: 'Bodywarmers' },

    ],
  },
];

export default function Home() {
  return (
    <div>
      <FabricsSection sections={fabricSections} />
    </div>
  );
}
