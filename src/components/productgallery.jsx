import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductGallery = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Colors' },
    { id: 'warm', name: 'Warm Tones' },
    { id: 'cool', name: 'Cool Tones' },
    { id: 'neutral', name: 'Neutrals' },
    { id: 'bold', name: 'Bold & Vibrant' }
  ];

  const products = [
    {
      id: 1,
      name: 'Sunset Orange',
      category: 'warm',
      color: '#FF6B35',
      finish: 'Matte',
      coverage: '12-14 m²/L'
    },
    {
      id: 2,
      name: 'Coral Blush',
      category: 'warm',
      color: '#FF8B94',
      finish: 'Satin',
      coverage: '12-14 m²/L'
    },
    {
      id: 3,
      name: 'Terracotta Dream',
      category: 'warm',
      color: '#E07A5F',
      finish: 'Matte',
      coverage: '12-14 m²/L'
    },
    {
      id: 4,
      name: 'Ocean Blue',
      category: 'cool',
      color: '#2E86AB',
      finish: 'Satin',
      coverage: '12-14 m²/L'
    },
    {
      id: 5,
      name: 'Mint Fresh',
      category: 'cool',
      color: '#98D8C8',
      finish: 'Matte',
      coverage: '12-14 m²/L'
    },
    {
      id: 6,
      name: 'Lavender Mist',
      category: 'cool',
      color: '#B4A7D6',
      finish: 'Satin',
      coverage: '12-14 m²/L'
    },
    {
      id: 7,
      name: 'Sky Serenity',
      category: 'cool',
      color: '#A8DADC',
      finish: 'Matte',
      coverage: '12-14 m²/L'
    },
    {
      id: 8,
      name: 'Pearl White',
      category: 'neutral',
      color: '#F8F9FA',
      finish: 'Satin',
      coverage: '12-14 m²/L'
    },
    {
      id: 9,
      name: 'Warm Beige',
      category: 'neutral',
      color: '#E8D5C4',
      finish: 'Matte',
      coverage: '12-14 m²/L'
    },
    {
      id: 10,
      name: 'Soft Gray',
      category: 'neutral',
      color: '#CED4DA',
      finish: 'Satin',
      coverage: '12-14 m²/L'
    },
    {
      id: 11,
      name: 'Warm Taupe',
      category: 'neutral',
      color: '#D4C5B9',
      finish: 'Matte',
      coverage: '12-14 m²/L'
    },
    {
      id: 12,
      name: 'Ruby Red',
      category: 'bold',
      color: '#D32F2F',
      finish: 'Gloss',
      coverage: '10-12 m²/L'
    },
    {
      id: 13,
      name: 'Electric Purple',
      category: 'bold',
      color: '#7B2CBF',
      finish: 'Satin',
      coverage: '12-14 m²/L'
    },
    {
      id: 14,
      name: 'Emerald Green',
      category: 'bold',
      color: '#2D6A4F',
      finish: 'Matte',
      coverage: '12-14 m²/L'
    },
    {
      id: 15,
      name: 'Golden Yellow',
      category: 'bold',
      color: '#FFC857',
      finish: 'Satin',
      coverage: '12-14 m²/L'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (productName) => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Color Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our curated selection of premium wall paint colors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  className="h-48 relative overflow-hidden cursor-pointer"
                  style={{ backgroundColor: product.color }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Check className="w-6 h-6 text-green-600" />
                  </motion.div>
                </motion.div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Finish:</span>
                      <span className="font-semibold text-gray-900">{product.finish}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-semibold text-gray-900">{product.coverage}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleAddToCart(product.name)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;