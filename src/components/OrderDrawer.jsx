import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

export default function OrderDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const priceNum = parseFloat(item.price.replace('$', '')) || 0;
      return acc + priceNum * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();

  const handleCheckout = () => {
    sound.playChime();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1200);
  };

  const handleClose = () => {
    sound.playScoop();
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#183B2C]/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#FFF7E8] text-[#183B2C] h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-[#183B2C]/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#183B2C]" />
            <h3 className="font-serif-luxury text-2xl font-bold text-[#183B2C]">
              Your Gelateria Bag
            </h3>
            <span className="text-xs bg-[#A8C686] text-[#183B2C] font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#183B2C]/10 transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5 text-[#183B2C]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {orderComplete ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#A8C686] text-[#183B2C] flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-luxury text-3xl font-bold text-[#183B2C] mb-2">
                Pure Bliss Confirmed!
              </h4>
              <p className="text-sm text-[#183B2C]/80 max-w-xs mb-6">
                Your artisanal MINT MELT package is being carefully packed with dry ice and shipped via temperature-controlled express.
              </p>
              <div className="bg-white/80 p-4 rounded-2xl border border-[#183B2C]/10 text-left text-xs space-y-1.5 w-full">
                <div className="flex justify-between">
                  <span className="text-[#183B2C]/60">Order Code:</span>
                  <span className="font-mono font-bold">MM-84920</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#183B2C]/60">Dispatch:</span>
                  <span className="font-semibold">Tomorrow Morning</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#183B2C]/60">Arrival Temp:</span>
                  <span className="font-semibold text-emerald-800">-18°C Deep Frozen</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="mt-8 bg-[#183B2C] text-[#FFF7E8] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#254F3C] transition-colors"
              >
                Return to Experience
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#DDF3E5] flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-[#183B2C]/40" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-[#183B2C] mb-2">
                Your Bag is Empty
              </h4>
              <p className="text-sm text-[#183B2C]/70 max-w-xs mb-6">
                Select from our artisanal tasting flights below to begin your ritual.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#183B2C] text-[#FFF7E8] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#254F3C] transition-colors"
              >
                Explore Editions
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/80 p-4 rounded-2xl border border-[#183B2C]/10 flex items-center justify-between gap-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/mint-melt-cup.png"
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h5 className="font-serif-luxury text-lg font-bold text-[#183B2C]">
                        {item.name}
                      </h5>
                      <p className="text-xs text-[#183B2C]/70">{item.details}</p>
                      <span className="text-xs font-bold text-[#183B2C] mt-1 block">
                        {item.price} each
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-[#183B2C]/20 rounded-full overflow-hidden text-xs">
                      <button
                        onClick={() => {
                          sound.playScoop();
                          onUpdateQuantity(item.id, Math.max(1, item.quantity - 1));
                        }}
                        className="px-2.5 py-1 hover:bg-[#183B2C]/10 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => {
                          sound.playScoop();
                          onUpdateQuantity(item.id, item.quantity + 1);
                        }}
                        className="px-2.5 py-1 hover:bg-[#183B2C]/10 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        sound.playScoop();
                        onRemoveItem(item.id);
                      }}
                      className="text-[#183B2C]/40 hover:text-red-600 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Complimentary Inclusion */}
              <div className="bg-[#DDF3E5]/60 p-3.5 rounded-xl border border-[#DDF3E5] flex items-center gap-3 text-xs text-[#183B2C]">
                <Sparkles className="w-4 h-4 text-[#183B2C] shrink-0" />
                <span>
                  Includes <strong>complimentary custom wooden gelato paddles</strong> & chilled insulated container.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Checkout */}
        {cartItems.length > 0 && !orderComplete && (
          <div className="p-6 bg-white/70 border-t border-[#183B2C]/10 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#183B2C]/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#183B2C]/70">
                <span>Dry-Ice Cold Freight</span>
                <span className="text-emerald-800 font-medium">Free Express</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#183B2C] pt-2 border-t border-[#183B2C]/10">
                <span>Total Due</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#183B2C] text-[#FFF7E8] hover:bg-[#254F3C] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg shadow-[#183B2C]/15 flex items-center justify-center gap-2 focus:outline-none"
            >
              {isCheckingOut ? (
                <span>Securing Cold Shipment...</span>
              ) : (
                <>
                  <Truck className="w-4 h-4" />
                  <span>Secure Cold-Box Checkout</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-[#183B2C]/60 text-center">
              <span>Arrives Frozen Guaranteed</span>
              <span>•</span>
              <span>100% Satisfaction</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
