import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small rooms',
      features: [
        '1 Liter premium paint',
        'Standard color range',
        'Matte finish',
        'Basic coverage guide',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '79',
      description: 'Ideal for multiple rooms',
      features: [
        '4 Liters premium paint',
        'Full color range',
        'Choice of finish',
        'Professional tools included',
        'Color consultation',
        'Priority support',
        'Free delivery'
      ],
      popular: true
    },
    {
      name: 'Complete',
      price: '149',
      description: 'For entire home projects',
      features: [
        '10 Liters premium paint',
        'Unlimited color options',
        'All finishes available',
        'Complete tool kit',
        'Expert consultation',
        '24/7 support',
        'Free delivery & setup',
        'Color matching service'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (planName) => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your painting project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'ring-4 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-50 to-purple-50' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/ package</span>
                </div>

                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full mb-6 py-6 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-blue-600' : 'bg-gray-900'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg">
            Need a custom package? <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 font-semibold underline">Contact us</button> for a personalized quote
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;