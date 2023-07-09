<template>
  <ul class="pagination">

    <li class="pagination-item">
      <button
      class="btn-item"
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        &lt;-
      </button>
    </li>

    <li
      v-for="page in pages"
      class="pagination-item"
    >
      <button
        type="button"
        class="btn-item"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <li class="pagination-item">
      <button 
      class="btn-item"
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        -&gt;
      </button>
    </li>
  </ul>
</template>

<script>
export default {
    props: {
       
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },    
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    }
  },

  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
     
      if (this.currentPage === 1) {
        return 1;
      }

    
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

     
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
  }
}
</script>

<style>
.pagination {
  list-style-type: none;
  text-align: center;
  cursor: pointer !important;
}

.pagination-item {
  display: inline-block;
  padding: 10px;
}

.active {
  background-color: gray;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2em;
 
}

.btn-item {
  cursor: pointer !important;
}
button {
  background-color: #fff;
  color: #000;
  padding: 3px;
  border: none;
  font-size: 1em;
  transition: 0.3s;
}
button:hover {
  background-color: gray;
  color: white;
  border-radius: 25px;
}


</style> 
