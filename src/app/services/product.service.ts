import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Product[] = [
    {
      price: 29.99,
      image:
        'https://imgs.search.brave.com/hqy_TcnMzC7axaQdLP-EH8l5gSFdWQfeTBY4V6dHIp0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFsQXJTaUQ1aEwu/anBn',
      name: 'Wireless Headphones',
      description:
        'Comfortable over-ear headphones with high-quality sound and Bluetooth connectivity.',
    },
    {
      price: 49.99,
      image:
        'https://imgs.search.brave.com/0Hq13fu5ti1m8_O6WFzhwh_J31n9tR_ug1k0G6h7DpM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAx/MjI3ODU4OC9waG90/by9zbWFydC1zcGVh/a2VyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1aamlYSUFH/Rm1kZnhhVHhoR0Fi/NEtsT0o0WnN5bGhf/NGYzcnRLQ01wd1NN/PQ',
      name: 'Smart Speaker',
      description:
        'Voice-controlled smart speaker with built-in virtual assistant and powerful audio.',
    },
    {
      price: 99.99,
      image:
        'https://imgs.search.brave.com/wIicVU7Y54cO3fDSs3FukP_2_jjJrKxCQzgbwEvUdcM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFSRHNINnBLMEwu/anBn',
      name: 'Fitness Tracker',
      description:
        'A sleek fitness tracker with heart rate monitoring, step counting, and sleep tracking.',
    },
    {
      price: 14.99,
      image:
        'https://imgs.search.brave.com/FnTwMuaRsetulOBum7NOpQ2GQsHHOyycEQEwgNMVLmM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzE2Lzg4LzQ4/LzM2MF9GXzExNjg4/NDg1Nl92VENhZER0/R2F0Y3llYVBwRWc1/SFNra2hidGVKbzdU/Wi5qcGc',
      name: 'Portable Charger',
      description:
        'Compact power bank with fast-charging capabilities and a 10,000 mAh capacity.',
    },
    {
      price: 199.99,
      image:
        'https://imgs.search.brave.com/p9mqtxSi8Gfel2oFuoofM681NdpmlZDNIrbv_vOV2y4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXhwbG9yZXNjaWVu/dGlmaWMuY29tL2Nk/bi9zaG9wL3Byb2R1/Y3RzLzIwMjFfODgt/ODMwMjFfNEtXaUZp/Q2FtZXJhXzlfOWE2/MmUxNTUtNGZhMC00/ODAyLWJhZDYtNTY2/ZDkzMTFjYzYxXzcw/MHg3MDAuanBnP3Y9/MTY0NTU1NjYzOQ',
      name: '4K Action Camera',
      description:
        'Capture your adventures in stunning 4K resolution with this waterproof action camera.',
    },
    {
      price: 59.99,
      image:
        'https://imgs.search.brave.com/-YXScvMgakxgHhPNp3WKz2ydehuAwyCTZwgOHpRUnag/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWNo/YW5pY2Fsa2V5Ym9h/cmRzLmNvbS9jZG4v/c2hvcC9hcnRpY2xl/cy9rZXlib2FyZDEu/cG5nP3Y9MTcwODUz/Mjc2NyZ3aWR0aD05/NDA',
      name: 'Mechanical Keyboard',
      description:
        'Tactile and responsive keyboard with customizable RGB backlighting and mechanical switches.',
    },
    {
      price: 24.99,
      image:
        'https://imgs.search.brave.com/nkdRConECdn603nlhwMe2Jgb64YltWF42ywrJWI0Gyk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MTcvMjE5OS80NDMy/L3Byb2R1Y3RzL0Ez/OTkzMDExX05vaXNl/X0NhbmNlbGxpbmdf/RWFyYnVkc19URDAx/X1YxXzEuanBnP3Y9/MTcxMTAxMDQwMg',
      name: 'Noise Cancelling Earbuds',
      description:
        'Compact earbuds with active noise cancellation and long battery life for immersive sound.',
    },
    {
      price: 39.99,
      image:
        'https://imgs.search.brave.com/yIK9f-pC6SERneWuDaU30Fu7J705HVw44N1SveAn4mk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzAxL2xlZGRl/c2tsYW1wcy0yMDQ4/cHgtdXBsaWZ0Mi5q/cGc_YXV0bz13ZWJw/JnF1YWxpdHk9NzUm/d2lkdGg9MTAyNA',
      name: 'LED Desk Lamp',
      description:
        'Adjustable LED lamp with multiple brightness levels and a built-in USB charging port.',
    },
    {
      price: 149.99,
      image:
        'https://imgs.search.brave.com/rEq5yslHAyHoFhgMOvUB8NSDW1bYMtH82Tr4ED6GWjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/MzI4Mjg2L3Bob3Rv/L3NtYXJ0d2F0Y2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVVuczFVMmZqYzBN/NURJenhXOHFvOFdt/X0s3YWZ4Zk5sd1JX/YWlYczQ2UE09',
      name: 'Smartwatch',
      description:
        'Feature-packed smartwatch with health tracking, notifications, and a vibrant touchscreen display.',
    },
    {
      price: 89.99,
      image:
        'https://imgs.search.brave.com/DemdX5Zwj_i1SMY7MWWB29TiGUgWM3THVPpaKgtGq_g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF5U3U1NUp6QUwu/anBn',
      name: 'Wireless Gaming Mouse',
      description:
        'Ergonomic wireless mouse with adjustable DPI settings and programmable buttons for gaming.',
    },
  ];

  getProductList() {
    return this.productList;
  }
}
