<template>
  <div>
    <div class="heading-section">
      <div class="heading-icon">
        <img :src="componentValue.icon" alt="" srcset="" />
      </div>
      <h5>{{ componentValue.Name }}</h5>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="credit-card" v-for="(card, c) in cards" :key="c">
          <div class="credit-card-name">
            <h4>{{card.cardName}}</h4>
          </div>
          <div class="credit-card-number">
            <h3>{{card.cardNumber}}</h3>
          </div>
          <div class="credit-card-more-details">
            <div class="expiry-date">
              <p>Expiry Date</p>
              <span>{{convertDateToMonth(card.expiry)}}</span>
            </div>
            <div class="cvv-number">
              <p>CVV</p>
              <span>{{card.cvv}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent.stop="addCard">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Name on Card</label>
            <b-form-input
              id="input-1"
              v-model="cardDetail.cardName"
              placeholder="Enter Name On Card"
              name="Card Name"
              v-validate="{ required: true}"
              :state="validateState('Card Name')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
            veeErrors.first("Card Name")
          }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Card Number</label>
            <b-form-input
              id="input-2"
              v-model="cardDetail.cardNumber"
              placeholder="Enter Card Number"
              name="Card Number"
              v-validate="{ required: true, max:19, min:19}"
              :state="validateState('Card Number')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
            veeErrors.first("Card Number")
          }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Expiry Date</label>
            <date-picker
              input-class="form-control d-block"
              v-model="cardDetail.expiry"
              type="month"
              format="MM/YYYY"
              placeholder="Enter Expiry Date"
              :clearable="false"                
            >
            </date-picker>
            <b-form-input
              class="d-none"
              id="input-2"
              v-model.number="cardDetail.expiry"
              type="date"
              placeholder="Enter Card Number"
              name="Card expiry"
              v-validate="{required: true}"
              :state="validateState('Card expiry')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
            veeErrors.first("Card expiry")
          }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">CVV</label>
            <b-form-input
              id="input-4"
              v-model="cardDetail.cvv"
              type="password"
              placeholder="Enter CVV"
              name="cvv"
              v-validate="{ required: true, max:3, min:3}"
              :state="validateState('cvv')"              
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
            veeErrors.first("cvv")
          }}</b-form-invalid-feedback>
          </div>
        </div>                
      </div>
      <div class="row">
        <div class="col-md-6">
          <b-button type="submit" class="btn btn-light-info btn-sm">Save card</b-button>
        </div>
      </div>
    </form>
    
    <div class="mt-5">
      <b-button variant="success" @click="completeOnboarding">save &amp; complete</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

@Component({
  components:{
    DatePicker
  }
})
export default class cardInformation extends Vue {
    @Prop() componentValue:any;
    user:any='';
    cards:any=null;
    cardDetail:any={
      cardName:'',
      cardNumber:'',
      expiry:new Date(),
      cvv:''
    }

    veeFields: any;
    veeErrors: any;

    validateState(ref: any) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    }

    addCard(){ 
      this.$validator.validateAll().then((result) => {
        if(result){

          this.cards.push({
            cardName:this.cardDetail.cardName,
            cardNumber:this.cardDetail.cardNumber,
            expiry:this.cardDetail.expiry,
            cvv:this.cardDetail.cvv,
          })

          this.$set(this.user, 'cardDetails', this.cards)
          this.$store.dispatch("addNewUser", this.user);

          this.cardDetail.cardName=""
          this.cardDetail.cardNumber=""
          // this.cardDetail.expiry=new Date()
          this.cardDetail.cvv=""
          this.$validator.reset();
        }
      })  
    }

    mounted(){
      this.user = this.$store.state.user;
      this.cards = this.user.cardDetails ? this.user.cardDetails : [];
    }

    convertDateToMonth(date:any){
      return `${new Date(date).getMonth()} / ${new Date(date).getFullYear()}`
    }

    completeOnboarding = () => {
      this.$router.push("/profile")
    }

}
</script>

<style scoped></style>
