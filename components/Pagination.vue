<template>
  <ul class="pagination">

    <!-- <li class="pagination-item">
      <button
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        &lt;&lt;-
      </button>
    </li> -->

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        &lt;-
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li
      v-for="page in pages"
      class="pagination-item"
    >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        -&gt;
      </button>
    </li>

    <!-- <li class="pagination-item">
      <button
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Last
      </button>
    </li> -->

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
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
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
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>





<!-- <template>
    <div>
        <ul class="pagination">
            <li v-for="p in totalPages" :key="p">
                <button class="pagination-button"
                        :class="{active: currentPage === p}"
                        @click="changePage(p)"
                >{{p}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['total', 'item'],
        data() {
            return {
                currentPage: 1
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.total / this.item)
            }
        },
        methods: {
            changePage(pageNumber) {
                this.currentPage = pageNumber
                this.$emit('page-changed', pageNumber)
            }
        }
    }
</script>

<style scoped>
    .pagination-button {
        background-color: white;
        color: #1c1d21;
        border: 1px solid #3b5998;
    }
    .active {
        background-color: #1da1f2;
    }
</style> -->