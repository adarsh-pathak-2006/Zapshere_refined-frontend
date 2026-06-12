const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

// Parse .env.local manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const [key, ...values] = line.split('=');
  if (key && values.length) {
    env[key.trim()] = values.join('=').trim();
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SB_URL, env.NEXT_PUBLIC_SB_KEY);

async function checkAndSeed() {
  const { data: existing, error: fetchErr } = await supabase.from('blogs').select('*');
  console.log('Existing blogs:', existing?.length);
  
  if (fetchErr) {
    console.error('Error fetching blogs:', fetchErr);
    return;
  }

  // Delete all existing blogs to keep it clean (optional, but good for resetting to the 3 exact ones)
  if (existing && existing.length > 0) {
     for (let b of existing) {
         await supabase.from('blogs').delete().eq('id', b.id);
     }
     console.log("Deleted old blogs");
  }

  // Define new blogs
  const newBlogs = [
    {
      title: "What Is AEO? How Answer Engine Optimisation Is Changing Search Forever",
      slug: "what-is-aeo-answer-engine-optimisation",
      excerpt: "AEO & GEO", // Using excerpt for Category
      thumbnail_url: "/images/blog-aeo.png",
      created_at: "2026-05-20T00:00:00Z"
    },
    {
      title: "How AI Calling Agents Help Australian Businesses Convert More Leads 24/7",
      slug: "ai-calling-agents-australian-businesses",
      excerpt: "Automation",
      thumbnail_url: "/images/blog-automation.png",
      created_at: "2026-04-28T00:00:00Z"
    },
    {
      title: "Why Every Business in Germany Needs a GDPR-Safe AI Marketing Strategy in 2026",
      slug: "gdpr-safe-ai-marketing-strategy-germany",
      excerpt: "Digital Marketing",
      thumbnail_url: "/images/blog-germany.png",
      created_at: "2026-04-10T00:00:00Z"
    }
  ];

  const { data, error } = await supabase.from('blogs').insert(newBlogs).select();
  
  if (error) {
    console.error('Error inserting blogs:', error);
  } else {
    console.log('Successfully inserted blogs:', data.length);
  }
}

checkAndSeed();
