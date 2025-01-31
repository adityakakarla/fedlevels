<form method="POST" action="?/login" class="space-y-6 max-w-md mx-auto">
    <label class="flex flex-col">
      <span class="my-1 font-light text-lg">Email</span>
      <input
        name="email"
        type="email"
        class="w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2
               text-base hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
               focus:ring-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
        required
        placeholder="your@email.com"
      />
    </label>
  
    <label class="flex flex-col">
      <span class="my-1 font-light text-lg">Password</span>
      <input
        name="password"
        type="password"
        class="w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2
               text-base hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
               focus:ring-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
        required
        placeholder="••••••••"
      />
    </label>
  
    <div class="flex space-x-4">
      <button
        type="submit"
        class="flex-1 rounded-lg bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 
               focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Login
      </button>
      <button
        formaction="?/signup"
        class="flex-1 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 
               focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Sign up
      </button>
    </div>
  </form>