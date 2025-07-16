import FabricsSection from './fabric';

const fabricSections = [
  {
    title: 'Fabrics',
    description:
      'From concept to creation, we provide all kinds of fabrics required for your production needs sourced with precision and reliability',
    fabrics: [
      { image: '/images/product/fabric1.jpg', label: 'Lycra blend' },
      { image: '/images/product/fabric2.jpg', label: 'Bamboo fabric' },
      { image: '/images/product/fabric3.jpg', label: 'Polyamide fabric' },
      { image: '/images/product/fabric4.jpg', label: 'Ivory Silk Duchess Satin' },
      { image: '/images/product/fabric5.jpg', label: 'Italian Lyocell Cotton' },
      { image: '/images/product/fabric6.jpg', label: 'Polyester Stretch Mesh' },
       { image: '/images/product/fabric7.jpg', label: 'Cotton_Spandex Jersey' },
       { image: '/images/product/fabric8.jpg', label: '3yards Solid DTY BRUSHED' },
       { image: '/images/product/fabric9.jpg', label: 'Power Mesh Fabric by the Yard' },
    ],
  },
  {
    title: 'Trims and finishes',
    description: 'From detailing to durability, we offer a complete range of trims and finishes—sourced with care to enhance both function and aesthetics in every garment',
    fabrics: [
      { image: '/images/product/trims1.jpg', label: 'Hook and eye' },
      { image: '/images/product/trims2.png', label: 'Bows' },
      { image: '/images/product/trims3.jpg', label: 'Ring sliders' },
       { image: '/images/product/trims4.png', label: 'xyz' },
      { image: '/images/product/trims5.jpg', label: 'Bow Pearl Underwear Straps ' },
      { image: '/images/product/trims6.jpg', label: ' Fashion Webbing Bra Buckles' },
    ],
  },
  {
    title: 'Lingerie Accessories',
    description: 'Subtle yet essential, our lingerie accessories are carefully selected to enhance comfort, support, and confidence in every intimate piece',
    fabrics: [
      { image: '/images/product/acc1.jpg', label: 'Stick on bras' },
      { image: '/images/product/acc2.jpg', label: 'Nipple pasties' },
      { image: '/images/product/acc3.png', label: 'Disposable bras' },
       { image: '/images/product/acc4.jpg', label: 'Nudes' },
      { image: '/images/product/acc5.png', label: 'abc' },
      { image: '/images/product/acc6.jpg', label: ' Womens Underwear & Nightwear' },
    ],
  },
  {
    title: 'Menswear',
    description: 'Designed to move with you, our mens essentials combine fit, function, and a focus on all-day ease',
    fabrics: [
      { image: '/images/product/mens1.jpg', label: 'Men’s Brief' },
      { image: '/images/product/mens2.png', label: 'Mens vests' },
      { image: '/images/product/mens3.jpg', label: 'Mens Boxers' },

    ],
  },

  {
    title: 'Intimate wear',
    description: 'From fabric to fit, our intimate wear can be custom-designed to align perfectly with your vision and requirements',
    fabrics: [
      { image: '/images/product/inti1.jpg', label: 'Bras' },
      { image: '/images/product/inti2.jpg', label: 'Panties' },
      { image: '/images/product/inti3.jpg', label: 'Lingerie sets' },

    ],
  },

  {
    title: 'Loungewear',
    description: 'Whether you’re after laid-back luxury or functional comfort, our loungewear can be custom-crafted to reflect your exact vision',
    fabrics: [
      { image: '/images/product/loungewear1.jpg', label: 'Nightwear sets' },
      { image: '/images/product/loungewear2.jpg', label: 'Pajamas' },
      { image: '/images/product/loungewear3.jpg', label: 'Polyamide fabric' },

    ],
  },

  {
    title: 'Shapewear',
    description: 'Designed to smooth, shape, and support, our shapewear can be custom-crafted to meet your specific fit, function, and fabric requirements.',
    fabrics: [
      { image: '/images/product/shape1.png', label: 'Waist clinchers' },
      { image: '/images/product/shape2.png', label: 'Bodysuits' },
      { image: '/images/product/shape3.png', label: 'Panty shapers' },

    ],
  },

  {
    title: 'Athleisure wear',
    description: 'Our athleisure wear merges function with fashion, offering custom design options to suit your lifestyle and brand identity.',
    fabrics: [
      { image: '/images/product/athle1.jpg', label: 'Sports sets' },
      { image: '/images/product/athle2.jpg', label: 'Leggings/ Yoga pants' },
      { image: '/images/product/athle3.jpg', label: 'Sportsbra' },

    ],
  },

  {
    title: 'Thermal wear ',
    description: 'Crafted to retain heat without bulk, our thermal wear is fully customizable to support your specific product vision and use-case demands',
    fabrics: [
      { image: '/images/product/thermal1.jpg', label: 'Thermal leggings' },
      { image: '/images/product/thermal2.jpg', label: 'Thermal vests' },
      { image: '/images/product/thermal3.jpg', label: 'Bodywarmers' },

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
